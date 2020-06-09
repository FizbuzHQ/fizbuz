import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Auth0Provider } from 'src/auth/auth0';
import BareLayout from 'src/layouts/BareLayout';
import Routes from 'src/Routes';
import GraphQLProvider from 'src/GraphQLProvider';
import UserProvider from 'src/UserProvider';
import Error from 'src/pages/Error';
import 'src/index.css';

const Catch = ({ children }) => {
    const location = useLocation();
    if (location.pathname === '/error') {
        return <BareLayout component={Error} />;
    } else return children;
};

ReactDOM.render(
    <Router>
        <Catch>
            <Auth0Provider
                domain={process.env.AUTH0_DOMAIN}
                client_id={process.env.AUTH0_CLIENT_ID}
                audience={process.env.AUTH0_AUDIENCE}
                cacheLocation={process.env.AUTH0_CACHE_LOCATION}
                redirect_uri={`${window.location.origin}${process.env.AUTH0_CALLBACK}`}
            >
                <GraphQLProvider>
                    <UserProvider>
                        <Routes />
                    </UserProvider>
                </GraphQLProvider>
            </Auth0Provider>
        </Catch>
    </Router>,
    document.getElementById('root'),
);
