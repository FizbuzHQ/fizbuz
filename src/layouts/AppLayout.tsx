import * as React from 'react';

import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppNav from '../components/nav/AppNav';
import Footer from '../components/nav/Footer';

import './AppLayout.css';

const AppLayout = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <>
                    <Helmet>
                        <title>Fizbuz</title>
                    </Helmet>
                    <div id="app">
                        <AppNav />
                        <section id="content" className="p-4 bg-white">
                            <Component {...props} />
                        </section>
                        <Footer />
                    </div>
                </>
            )}
        />
    );
};

export default AppLayout;
