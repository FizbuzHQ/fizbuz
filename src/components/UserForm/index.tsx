import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useUpdateUserMutation, useUserQuery } from '../../generated/graphql';
import UserForm from './UserForm';

const UserFormContainer = () => {
    // this will come from a URL param or the session
    const { id } = useParams();

    const { data: userData, error: userError, loading: userLoading } = useUserQuery({
        variables: {
            id,
        },
    });

    const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
        variables: {
            id,
            userInput: {},
        },
    });

    console.log('render of UserFormContainer / query', userData, userLoading, userError);
    console.log('render of UserFormContainer / mutation', data, loading, error);

    if (userLoading) {
        return <div>Loading...</div>;
    }

    if (loading) {
        return <div>Saving...</div>;
    }

    return <UserForm mutation={updateUserMutation} userData={userData} />;
};

export default UserFormContainer;
