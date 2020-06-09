import * as React from 'react';
import gql from 'graphql-tag';
import { useHomeQuery } from 'src/generated/graphql';

gql`
    query Home {
        currentUser {
            ...FullProfile
        }
    }
`;

function Home() {
    const { data } = useHomeQuery();

    return (
        <>
            <h1>Dashboard</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}

export default Home;
