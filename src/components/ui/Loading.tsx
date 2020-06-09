import * as React from 'react';

function Loading({ debug = undefined }) {
    if (debug) console.log(debug);
    return <div>Loading...</div>;
}

export default Loading;
