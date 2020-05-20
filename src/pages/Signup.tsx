import * as React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import gql from 'graphql-tag';
import { useApolloClient } from '@apollo/react-hooks';
import { useAuth0 } from '../auth/auth0';
import { useSignupMutation, useUserQuery } from '../generated/graphql';
import Alert from '../components/ui/Alert';
import Loading from '../components/Loading';

gql`
    query User($where: UserWhereUniqueInput!) {
        user(where: $where) {
            id
        }
    }

    mutation Signup($userInput: UserCreateInput!) {
        createOneUser(data: $userInput) {
            id
        }
    }
`;

function Signup() {
    // get the user info from Auth0
    const { user } = useAuth0();
    const apolloClient = useApolloClient();
    const history = useHistory();

    // query to see if this user already exists in our DB
    const { data: queryData, error: queryError, loading: queryLoading } = useUserQuery({
        variables: {
            where: {
                auth0Sub: user.sub,
            },
        },
    });

    // mutation to create a new user
    const [
        createUserMutation,
        { data: mutationData, loading: mutationLoading, error: mutationError },
    ] = useSignupMutation({
        variables: {
            userInput: {
                email: user.email,
                auth0Sub: user.sub,
            },
        },
    });

    // query effect
    useEffect(() => {
        // if the query has completed
        if (!queryLoading) {
            // if this user if already in the DB
            if (queryData && queryData.user) {
                // re-direct to / and suggest that they try to log-in
                history.replace('/', { message: 'You already have an account, please log-in.' });
            } else {
                createUserMutation({
                    variables: {
                        userInput: {
                            email: user.email,
                            auth0Sub: user.sub,
                        },
                    },
                });
            }
        }
    }, [queryLoading]);

    // mutation effect
    useEffect(() => {
        // if the mutation has completed
        if (!mutationLoading) {
            // if there wasn't an error
            if (!mutationError && mutationData?.createOneUser?.id) {
                const userId = mutationData?.createOneUser?.id;
                // store the user id in the local cache
                apolloClient.writeData({ data: { userId } });
                // re-direct to onboarding process
                history.push('/onboarding/skills');
            }
        }
    }, [mutationLoading]);

    if (queryLoading || mutationLoading) {
        return <Loading />;
    }

    if (queryError || mutationError) {
        return <Alert title="Error" message={queryError.message || mutationError.message} />;
    }

    return (
        <pre>
            queryData: {JSON.stringify(queryData, null, 2)}
            mutationData: {JSON.stringify(mutationData, null, 2)}
        </pre>
    );
}

export default Signup;
