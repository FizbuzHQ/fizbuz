import * as React from 'react';
import { useLocation } from 'react-router-dom';

function Error() {
    const location = useLocation();

    return (
        <>
            <h1>The Dreaded Error Page</h1>
            <div className="mb-1">
                <img src="/fail_whale_big.png" alt="fail whale" />
                <div className="text-sm">
                    Credit: <a href="https://theoatmeal.com/blog/fail_whale">https://theoatmeal.com/blog/fail_whale</a>
                </div>
            </div>
            <pre>{JSON.stringify(location.state, null, 2)}</pre>
        </>
    );
}

export default Error;
