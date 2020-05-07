import * as React from 'react';

function Landing() {
    return (
        <div>
            <h1>Welcome to Fizbuz!</h1>
            <p>Here are some things you can do to test that things are running properly:</p>
            <ul className="list-disc list-inside">
                <li>Log in</li>
                <li>View your data in the Dashboard</li>
                <li>Log out</li>
            </ul>
        </div>
    );
}

export default Landing;
