import * as React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useAuth0 } from 'src/auth/auth0';
import AppLayout from 'src/layouts/AppLayout';
import DefaultLayout from 'src/layouts/DefaultLayout';
import Callback from 'src/pages/Callback';
import OnboardingProfile from 'src/pages/onboarding/Profile';
import OnboardingSkills from 'src/pages/onboarding/Skills';
import Landing from 'src/pages/Landing';
import Home from 'src/pages/home';
import HomeProfile from 'src/pages/home/Profile';
import Error from 'src/pages/Error';
import { Mode } from 'src/components/ui/Alert';
import HomeSkills from './pages/home/Skills';

const NoMatch = () => {
    return <div>404, sorry!</div>;
};

const PrivateRoute = ({ component, layout: Layout = AppLayout, ...rest }) => {
    const location = useLocation();
    const { loading, isAuthenticated } = useAuth0();
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <Route {...rest}>
            {isAuthenticated /* && (admin === false || isAdminUser(user)) */ ? (
                <Layout component={component} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { message: 'Please Log In', mode: Mode.WARN, from: location },
                    }}
                />
            )}
        </Route>
    );
};

const PublicRoute = ({ component: Component, layout: Layout = DefaultLayout, ...rest }) => (
    <Route {...rest}>
        <Layout component={Component} />
    </Route>
);

function Routes() {
    return (
        <Switch>
            <Route exact path="/callback" component={Callback} />
            <PrivateRoute exact path="/onboarding/profile" component={OnboardingProfile} />
            <PrivateRoute exact path="/onboarding/skills" component={OnboardingSkills} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/home/profile" component={HomeProfile} />
            <PrivateRoute exact path="/home/skills" component={HomeSkills} />
            <PublicRoute exact path="/" component={Landing} />
            <PublicRoute path="/error" component={Error} />
            <PublicRoute path="*" component={NoMatch} />
        </Switch>
    );
}

export default Routes;
