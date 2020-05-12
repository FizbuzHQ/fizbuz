import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useAuth0 } from './auth/auth0';
import AppLayout from './layouts/AppLayout';
import DefaultLayout from './layouts/DefaultLayout';
import Landing from './pages/Landing';
import Home from './pages/Home';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const NoMatch = () => {
    return <div>404, sorry!</div>;
};

const PrivateRoute = ({ component, ...rest }) => {
    const location = useLocation();
    const { loading, isAuthenticated } = useAuth0();
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated /* && (admin === false || isAdminUser(user)) */ ? (
                    <AppLayout component={component} {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { message: 'Please Log In', from: location },
                        }}
                    />
                )
            }
        />
    );
};

const PublicRoute = ({ component: Component, layout: Layout = DefaultLayout, ...rest }) => (
    <Route {...rest} render={(props) => <Layout component={Component} {...props} />} />
);

function Routes() {
    return (
        <Switch>
            <PublicRoute exact path="/" component={Landing} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/users" component={UserList} />
            <PrivateRoute exact path="/users/:id/edit" component={UserForm} />
            <PublicRoute path="*" component={NoMatch} />
        </Switch>
    );
}

function App() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
