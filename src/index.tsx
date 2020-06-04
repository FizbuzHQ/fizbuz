import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Auth0Provider } from 'src/auth/auth0';
import BareLayout from './layouts/BareLayout';
import Routes from './Routes';
import GraphQLProvider from './GraphQLProvider';
import UserProvider from './UserProvider';
import Error from './pages/Error';
import './index.css';

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
