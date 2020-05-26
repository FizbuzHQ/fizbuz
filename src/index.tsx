import * as React from 'react';
import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { useAuth0, Auth0Provider } from './auth/auth0';
import Loading from './components/Loading';
import './index.css';
import App from './App';

const httpLink = new HttpLink({ uri: process.env.API_URL });

const GraphQLProvider = ({ children }) => {
    const { loading, isAuthenticated, getTokenSilently } = useAuth0();

    const [client, setClient] = useState(undefined);

    const authLink = setContext(async (_, { headers }) => {
        const token = isAuthenticated ? await getTokenSilently() : null;

        return {
            headers: {
                ...headers,
                Authorization: token ? `Bearer ${token}` : '',
            },
        };
    });

    useEffect(() => {
        // wait for Auth0 to finish loading
        if (!loading) {
            const cache = new InMemoryCache();

            const client = new ApolloClient({
                cache,
                link: authLink.concat(httpLink),
            });

            // initial data to set on page load
            const initData = {};

            // set initial data
            cache.writeData({ data: initData });

            persistCache({
                cache,
                storage: window.sessionStorage,
            }).then(() => {
                client.onResetStore(async () => cache.writeData({ data: initData }));
                setClient(client);
            });
        }
    }, [loading]);

    if (client === undefined || loading) return <Loading />;

    return (
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>
        </ApolloProvider>
    );
};

ReactDOM.render(
    <Auth0Provider
        domain={process.env.AUTH0_DOMAIN}
        client_id={process.env.AUTH0_CLIENT_ID}
        audience={process.env.AUTH0_AUDIENCE}
        cacheLocation={process.env.AUTH0_CACHE_LOCATION}
        redirect_uri={`${window.location.origin}${process.env.AUTH0_CALLBACK}`}
    >
        <GraphQLProvider>
            <App />
        </GraphQLProvider>
    </Auth0Provider>,
    document.getElementById('root'),
);
