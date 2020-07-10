import * as React from 'react';
//import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
//import { useApolloClient } from '@apollo/react-hooks';
import { useAuth0 } from 'src/auth/auth0';
import { useCurrentUserQuery } from 'src/generated/graphql';
import Loading from 'src/components/ui/Loading';
import itly from 'src/itly';

// If a user is logged-in, ensure that the "currentUser" object is queried & cached
const UserProvider = ({ children }) => {
    const { loading: authLoading, isAuthenticated, error: authError } = useAuth0();
    // skip this query if the user isn't authenticated
    const { data: currentUserData, loading: dataLoading, error: dataError } = useCurrentUserQuery({
        skip: !isAuthenticated,
    });
    // if the auth check or the user data is still loading, show a spinner
    if (authLoading || dataLoading) {
        return <Loading />;
    } else if (authError || dataError) {
        // if an error loading either resource occurred
        const message = authError ? authError.message : dataError.message;
        const from = location.pathname;
        return (
            <Redirect
                to={{
                    pathname: '/error',
                    state: { message, from },
                }}
            />
        );
    } else {
        if (currentUserData && currentUserData.currentUser && currentUserData.currentUser.id) {
            itly.identify(currentUserData.currentUser.id);
        }
        return children;
    }
};

export default UserProvider;
