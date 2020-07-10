import * as React from 'react';
import gql from 'graphql-tag';
import { useHomeQuery } from 'src/generated/graphql';
import useUpload from 'src/components/ui/useUpload';

gql`
    query Home {
        currentUser {
            ...FullProfile
        }
    }
`;

function Home() {
    // (window as any).Intercom('show');
    const { data } = useHomeQuery();
    const { data: uploadData, /*uploading,*/ upload } = useUpload();
    return (
        <>
            <h1>Dashboard</h1>
            <input type="file" onChange={upload} />
            {uploadData && <p>{uploadData.url}</p>}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}

export default Home;
