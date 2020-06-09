import * as React from 'react';
import { useState } from 'react';
import gql from 'graphql-tag';
import { useHomeQuery, useUpdateProfileHomeMutation } from 'src/generated/graphql';
import ProfileForm from 'src/forms/ProfileForm';
import { Alert, Mode } from 'src/components/ui/Alert';
import Loading from 'src/components/ui/Loading';

gql`
    mutation UpdateProfileHome($profileUpdateInput: ProfileUpdateInput!, $id: String!) {
        updateOneProfile(data: $profileUpdateInput, where: { id: $id }) {
            id
            nickname
            name
        }
    }
`;

const HomeProfile = () => {
    const [flash, setFlash] = useState(undefined);

    const { data: currentUserData } = useHomeQuery();

    // mutation to update the profile
    const [updateProfileMutation] = useUpdateProfileHomeMutation();

    // execute the profile update mutation
    const updateProfile = async (data) => {
        try {
            await updateProfileMutation({
                variables: {
                    id: data.id,
                    profileUpdateInput: {
                        nickname: data.nickname,
                        name: data.name,
                    },
                },
            });
            setFlash({ mode: Mode.SUCCESS, message: 'Profile updated successfully!' });
        } catch (error) {
            setFlash({ mode: Mode.ERROR, message: 'mutation failed, possibly because of validation errors' });
        }
    };

    if (!currentUserData) {
        return <Loading />;
    } else {
        return (
            <>
                <h1>Update Profile</h1>
                {flash && (
                    <div className="p-1">
                        <Alert mode={flash.mode} message={flash.message} />
                    </div>
                )}
                <p className="p-1 my-2">Blah blah blah</p>
                <ProfileForm profile={currentUserData.currentUser.profile} updateProfile={updateProfile} />
            </>
        );
    }
};

export default HomeProfile;
