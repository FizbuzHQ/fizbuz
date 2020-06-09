import * as React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import gql from 'graphql-tag';
import { useAuth0 } from 'src/auth/auth0';
import { useSignupMutation, useCurrentUserQuery } from 'src/generated/graphql';
import { Alert, Mode } from 'src/components/ui/Alert';
import Loading from 'src/components/ui/Loading';
import { CURRENT_USER_QUERY } from 'src/graphql/common';

gql`
    mutation Signup($userInput: UserCreateInput!) {
        createOneUser(data: $userInput) {
            id
            profile {
                id
                name
                nickname
            }
        }
    }
`;

function Callback() {
    const { user } = useAuth0();

    const history = useHistory();

    const { data: queryData, loading: queryLoading } = useCurrentUserQuery();

    // mutation to create a new user in the event the user doesn't exist
    const [
        createUserMutation,
        { data: mutationData, loading: mutationLoading, error: mutationError },
    ] = useSignupMutation();

    // query effect
    useEffect(() => {
        // if the query has completed the user already exists in our system
        if (!queryLoading && queryData && queryData.currentUser) {
            history.push('/home');
        } else if (!queryLoading) {
            // else the user isn't in our system, so let's create the user & associated identity and profile records
            createUserMutation({
                variables: {
                    userInput: {
                        email: user.email,
                        identities: {
                            create: [
                                {
                                    auth0Sub: user.sub,
                                },
                            ],
                        },
                        profile: {
                            create: {
                                name: user.name,
                                nickname: user.nickname,
                            },
                        },
                    },
                },
                refetchQueries: [
                    {
                        query: CURRENT_USER_QUERY,
                    },
                ],
            });
        } else {
            // noop
        }
    }, [queryLoading]);

    // mutation effect
    useEffect(() => {
        // if the mutation has completed
        if (!mutationLoading) {
            // if there wasn't an error
            if (!mutationError && mutationData && mutationData.createOneUser && mutationData.createOneUser.id) {
                // re-direct to onboarding process
                history.push('/onboarding/profile');
            }
        }
    }, [mutationLoading]);

    if (mutationError) {
        return <Alert mode={Mode.ERROR} title="Error" message={mutationError.message} />;
    } else {
        return <Loading />;
    }
}

export default Callback;
