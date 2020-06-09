import * as React from 'react';
//import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
//import { useApolloClient } from '@apollo/react-hooks';
import { useAuth0 } from 'src/auth/auth0';
import { useCurrentUserQuery } from 'src/generated/graphql';
import Loading from 'src/components/ui/Loading';

// If a user is logged-in, ensure that the "currentUser" object is queried & cached
const UserProvider = ({ children }) => {
    const { loading: authLoading, isAuthenticated, error: authError } = useAuth0();
    // skip this query if the user isn't authenticated
    const { loading: dataLoading, error: dataError } = useCurrentUserQuery({
        skip: !isAuthenticated,
    });

    if (authLoading || dataLoading) {
        return <Loading />;
    } else if (authError || dataError) {
        return (
            <Redirect
                to={{
                    pathname: '/error',
                    state: { message: authError.message || dataError.message, from: location.pathname },
                }}
            />
        );
    } else {
        return children;
    }
};

export default UserProvider;
