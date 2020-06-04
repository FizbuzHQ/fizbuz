import * as React from 'react';
import { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { useAuth0 } from 'src/auth/auth0';
import { useIdentityQuery } from 'src/generated/graphql';
import Loading from 'src/components/ui/Loading';

gql`
    query Identity($sub: String) {
        identity(where: { auth0Sub: $sub }) {
            user {
                id
            }
        }
    }
`;

// If a user is logged-in, this is where we set values for their session that children components/queries will rely on
const UserProvider = ({ children }) => {
    const { user, isAuthenticated } = useAuth0();
    const { data, error } = useIdentityQuery({
        skip: !isAuthenticated || !user,
        variables: {
            sub: user && user.sub,
        },
    });
    const apolloClient = useApolloClient();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // if the user lookup query has returned
        if (data) {
            // if a user was found, cache the userId and profileId
            if (data && data.identity && data.identity.user) {
                const userId = data.identity.user.id;
                // const profileId = data.identity.user.profile.id;
                const __typename = 'UserSession';
                //console.log('writing the userSession object: ', userId);
                apolloClient.writeData({ data: { userSession: { userId, /*profileId,*/ __typename } } });
            }
            setReady(true);
        }
    }, [data]);

    // if we got user data back OR the user is not authenticated, render children
    if (error) {
        return (
            <Redirect
                to={{
                    pathname: '/error',
                    state: { message: error.message, from: location.pathname },
                }}
            />
        );
    } else if (ready || !isAuthenticated) {
        return children;
    } else {
        return <Loading />;
    }
};

export default UserProvider;
