import * as React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <h1>Welcome to Fizbuz!</h1>
            <p>Here are some things you can do to test that things are running properly:</p>
            <ul className="list-disc list-inside">
                <li>Log in</li>
                <li>
                    View your Auth0 data at <Link to="/home">/home</Link>
                </li>
                <li>
                    View data from the Fizbuz GraphQL API at <Link to="/users">/users</Link>
                </li>
                <li>Log out</li>
            </ul>
        </div>
    );
}

export default Landing;
