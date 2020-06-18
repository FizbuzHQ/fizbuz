import * as React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import gql from 'graphql-tag';
import { useAuth0 } from 'src/auth/auth0';
import { useSignupMutation, useCurrentUserQuery } from 'src/generated/graphql';
import { Alert, Mode } from 'src/components/ui/Alert';
import Loading from 'src/components/ui/Loading';
import { CURRENT_USER_QUERY } from 'src/graphql/common';
import itly from 'src/itly';

gql`
    mutation Signup($userInput: UserCreateInput!) {
        createOneUser(data: $userInput) {
            id
            profile {
                id
                name
                nickname
                photo
            }
        }
    }
`;

function Callback() {
    const { user } = useAuth0();

    /**
     * email: "foobar@gmail.com"
     * email_verified: true
     * name: "Foo Bar"
     * nickname: "foobar"
     * picture: "https://avatars3.githubusercontent.com/u/118628?v=4"
     * sub: "github|12345"
     * updated_at: "2020-06-11T20:05:14.340Z"
     */

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
            itly.trackUserSignedIn();
            history.push('/home');
        } else if (!queryLoading) {
            // else the user isn't in our system, so let's create the user & associated identity and profile records
            createUserMutation({
                variables: {
                    userInput: {
                        email: user.email,
                        emailSearch: user.email.toLowerCase(),
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
                                nicknameSearch: user.nickname.toLowerCase(),
                                photo: user.picture,
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
