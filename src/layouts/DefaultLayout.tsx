import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DefaultNav from '../components/nav/DefaultNav';
import { Alert } from '../components/ui/Alert';
import Footer from '../components/nav/Footer';
import './DefaultLayout.css';

const DefaultLayout = ({ component: Component }) => {
    const location = useLocation();
    return (
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
                            <Alert mode={location.state.mode} message={location.state.message} />
                        </div>
                    )}
                </section>
                <section id="content" className="m-4">
                    <Component />
                </section>
                <Footer />
            </div>
        </>
    );
};

export default DefaultLayout;
