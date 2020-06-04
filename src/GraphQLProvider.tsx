import * as React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { useAuth0 } from 'src/auth/auth0';
import Loading from 'src/components/ui/Loading';

const httpLink = new HttpLink({ uri: process.env.API_URL });

// set-up the ApolloProvider with the proper JWT token header in order to make authenticated requests
const GraphQLProvider = ({ children }) => {
    const { isAuthenticated, getTokenSilently, loading } = useAuth0();

    if (loading) {
        return <Loading />;
    } else {
        const authLink = setContext(async (_, { headers }) => {
            const token = isAuthenticated ? await getTokenSilently() : null;

            return {
                headers: {
                    ...headers,
                    Authorization: token ? `Bearer ${token}` : '',
                },
            };
        });

        const cache = new InMemoryCache();
        const client = new ApolloClient({
            cache,
            link: authLink.concat(httpLink),
            resolvers: {}, // https://stackoverflow.com/questions/55970271/found-client-directives-in-query-but-no-client-resolvers-were-specified-warni
        });

        return (
            <ApolloProvider client={client}>
                <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>
            </ApolloProvider>
        );
    }
};

export default GraphQLProvider;

/* code for using apollo-pesistent-cache

// import { persistCache } from 'apollo-cache-persist';

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
*/
