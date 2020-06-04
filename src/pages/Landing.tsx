import * as React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <h1>Welcome to Fizbuz!</h1>
            <p>This is pre-Alpha! Here are some things you can do to test that things are running properly:</p>
            <ul className="list-disc m-4">
                <li>Sign-up</li>
                <li>Login-in</li>
                <li>
                    <Link to="/home">Dashboard</Link>
                </li>
            </ul>
        </>
    );
}

export default Landing;
