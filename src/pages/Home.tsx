import * as React from 'react';
import gql from 'graphql-tag';
import { useHomeQuery } from 'src/generated/graphql';

gql`
    query Home {
        currentUser {
            profile {
                nickname
                name
                skills {
                    tool {
                        name
                    }
                }
            }
        }
    }
`;
function Home() {
    const { data } = useHomeQuery();

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default Home;
