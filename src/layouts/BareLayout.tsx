import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Footer from '../components/nav/Footer';
import './DefaultLayout.css';

const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <>
                    <Helmet>
                        <title>Fizbuz - Error Page</title>
                    </Helmet>
                    <div id="default">
                        <nav className="bg-white shadow">
                            <div className="max-w-full p-4">
                                <Link to="/">
                                    <img className="block lg:hidden h-8 w-auto" src="/logo.png" alt="logo" />
                                </Link>
                            </div>
                        </nav>
                        <section id="content" className="m-4">
                            <Component {...props} />
                        </section>
                        <Footer />
                    </div>
                </>
            )}
        />
    );
};

export default DefaultLayout;
