import * as React from 'react';
import { useAuth0 } from '../auth/auth0';

function Home() {
    const { user } = useAuth0();

    return <pre>{JSON.stringify(user, null, 2)}</pre>;
}

export default Home;
