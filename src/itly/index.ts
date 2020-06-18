/* tslint:disable */
/* eslint-disable */
import * as validators from './validators';

export type Event = UserSignedInProperties | GuestClicksRegisterProperties;
export interface UserSignedInProperties {}
export interface GuestClicksRegisterProperties {}

export interface ItlyOptions {
  /**
   * The current environment (development or production). Default is development.
   */
  environment?: 'development' | 'production';
  /**
   * Whether calls to the Itly SDK should be no-ops. Default is false.
   */
  disabled?: boolean;
  /**
   * Analytics provider-specific configuration. Default is null.
   */
  destinations?: { segment?: { config?: {} } };
  /**
   * Custom logger to use for debug, info, warn, and error messages. Default is console.
   */
  logger?: { debug: (message: string) => void; info: (message: string) => void; warn: (message: string) => void; error: (message: string) => void; };
}

export type ItlyProperties = {
  [name: string]: any;
};
export interface ItlyDestination {
  init(): void;
  alias(userId: string, previousId: string | undefined): void;
  identify(userId: string | undefined, properties: ItlyProperties | undefined): void;
  group(userId: string | undefined, groupId: string, properties: ItlyProperties | undefined): void;
  page(userId: string | undefined, category: string | undefined, name: string | undefined, properties: ItlyProperties | undefined): void;
  track(userId: string | undefined, eventName: string, properties: ItlyProperties, eventId: string, eventVersion: string): void;
  reset(): void;
}

class SegmentBrowserAdapter implements ItlyDestination {
  private get segment(): any {
    const s: any = typeof self === 'object' && self.self === self && self;
    return s && s.analytics;
  }

  constructor(options: ItlyOptions, apiKey: string) {
    if (!this.segment) {
      // Segment (https://segment.com/docs/sources/website/analytics.js/quickstart/)
      // @ts-ignore
      !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize){if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";}}}();
    }
    this.segment.load(apiKey, options.destinations && options.destinations.segment && options.destinations.segment.config);
  }

  init() {
    // N/A for Segment
  }

  alias(userId: string, previousId: string | undefined) {
    this.segment.alias({ userId, previousId });
  }

  identify(userId: string | undefined, properties: ItlyProperties | undefined) {
    if (userId) {
      this.segment.identify(userId, properties);
    }
    else {
      this.segment.identify(properties);
    }
  }

  group(userId: string | undefined, groupId: string, properties: ItlyProperties | undefined) {
    this.segment.group(groupId, properties);
  }

  page(userId: string | undefined, category: string | undefined, name: string | undefined, properties: ItlyProperties | undefined) {
    this.segment.page(category, name, properties);
  }

  track(userId: string | undefined, eventName: string, properties: ItlyProperties) {
    this.segment.track(
      eventName,
      properties,
    );
  }

  reset() {
    this.segment.reset();
  }
}

class Itly {
  private options: ItlyOptions | undefined = undefined;
  private adapters: ItlyDestination[] = [];

  init(options: ItlyOptions) {
    if (this.options) {
      throw new Error('Itly is already initialized.');
    }

    this.options = options;

    if (!this.isInitializedAndEnabled()) {
      return;
    }

    this.adapters.push(new SegmentBrowserAdapter(options, this.options.environment === 'production' ? 'UfAAbvyEBAMWLUugMks6Rjt5qvHblkCG' : 'g8RQa2MZp2zsUhirybAgUbjCNcVrzYgs'));

    this.adapters.forEach(d => d.init());
  }

  alias(userId: string, previousId?: string) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }

    this.adapters.forEach(adapter => adapter.alias(userId, previousId));
  }

  /**
  * Identify a user and set or update that user's properties.
  * @param userId The user's ID.
  */
  identify(userId: string) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }

    this.adapters.forEach(adapter => adapter.identify(userId, undefined));
  }

  group(groupId: string) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }

    this.adapters.forEach(adapter => adapter.group(undefined, groupId, undefined));
  }
  
  page(category: string, name: string) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }

    this.adapters.forEach(adapter => adapter.page(undefined, category, name, undefined));
  }

  /**
   * Called when a user signs in
   * 
   * Owner: Carter Rabasa
   */
  trackUserSignedIn() {
    this.trackEvent(
      undefined,
      'User Signed In',
      undefined,
      '2d8d9756-24b2-4c62-a9a2-f6914315f80d',
      '3-0-0',
      validators.UserSignedInValidator,
    );
  }

  /**
   * Called with the user clicks Register
   * 
   * Owner: Carter Rabasa
   */
  trackGuestClicksRegister() {
    this.trackEvent(
      undefined,
      'Guest Clicks Register',
      undefined,
      '606bc227-0d9e-49d3-9c1a-5e48571116c5',
      '1-0-0',
      validators.GuestClicksRegisterValidator,
    );
  }

  reset() {
    this.adapters.forEach(adapter => adapter.reset());
  }

  private isInitializedAndEnabled() {
    if (!this.options) {
      throw new Error('Itly is not yet initialized. Have you called `itly.init()` on app start?');
    }

    return !this.options.disabled;
  }

  private validateObject(name: string, validator: any, object: ItlyProperties | undefined) {
    if (object && !validator(object)) {
      const errors = validator.errors.map((e: any) => {
        let extra = '';
        if (e.keyword === 'additionalProperties') {
          extra = ` (${e.params.additionalProperty})`;
        }
        return `\`properties${e.dataPath}\` ${e.message}${extra}.`;
      }).join(' ');
      this.handleValidationError(`Passed in ${name} properties did not validate against your tracking plan. ${errors}`);
    }
  }

  private trackEvent(userId: string | undefined, eventName: string, properties: any | undefined, eventId: string, eventVersion: string, eventValidator: any) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }

    if (this.options!.logger && this.options!.logger.debug) {
      this.options!.logger.debug(`[Itly] Tracking event "${eventName}"`);
    }

    this.validateObject(eventName, eventValidator, properties);

    this.adapters.forEach(adapter => adapter.track(userId, eventName, { ...properties }, eventId, eventVersion));
  }

  private handleValidationError(message: string) {
    if (this.options!.environment === 'production') {
      if (this.options!.logger && this.options!.logger.error) {
        this.options!.logger.error(message);
      }
      else {
        console.error(message);
      }
    }
    else {
      throw new Error(message);
    }
  }
}

export default new Itly();
