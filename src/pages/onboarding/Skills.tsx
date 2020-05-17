import * as React from 'react';
import { useParams } from 'react-router-dom';
import gql from 'graphql-tag';
import { useUpdateUserMutation, useUserQuery } from '../../generated/graphql';
import UserForm from '../../forms/UserForm';

gql`
    mutation UpdateUser($userInput: UserUpdateInput!, $id: String!) {
        updateOneUser(data: $userInput, where: { id: $id }) {
            id
        }
    }
`;

const OnboardingSkills = () => {
    // this will come from a URL param or the session
    const { id } = useParams();

    const { data: userData, error: userError, loading: userLoading } = useUserQuery({
        variables: {
            where: {
                id,
            },
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

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <UserForm mutation={updateUserMutation} userData={userData} />
            </div>
        </div>
    );
};

export default OnboardingSkills;
