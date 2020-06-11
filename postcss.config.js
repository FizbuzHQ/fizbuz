// NOTE: Parcel seems to auto-detect this configuration file and apply it. This in turn applies our Tailwind config.

// eslint-disable-next-line @typescript-eslint/no-var-requires
const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: ['./src/**/*.html', './src/**/*.tsx'],

    // Include any special characters you're using in this regular expression

    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
});

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        // for some reason, NODE_ENV is always "production", even on localhost :(
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    ],
};
