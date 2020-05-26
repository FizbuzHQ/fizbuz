import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DefaultNav from '../components/nav/DefaultNav';
import Alert from '../components/ui/Alert';
import Footer from '../components/nav/Footer';
import './DefaultLayout.css';

const DefaultLayout = ({ component: Component, ...rest }) => {
    const location = useLocation();
    return (
        <Route
            {...rest}
            render={(props) => (
                <>
                    <Helmet>
                        <title>Fizbuz</title>
                    </Helmet>
                    <div id="default">
                        <DefaultNav />
                        <section
                            id="alert"
                            style={{
                                padding: '1px',
                            }}
                        >
                            {location && location.state && location.state.message && (
                                <div style={{ padding: '10px' }}>
                                    <Alert message={location.state.message} />
                                </div>
                            )}
                        </section>
                        <section id="content" style={{ margin: '16px' }}>
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
