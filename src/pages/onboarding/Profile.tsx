import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGetCurrentUserProfileQuery, useUpdateProfileMutation } from 'src/generated/graphql';
import ProfileForm from 'src/forms/ProfileForm';
import { updateOneProfileSchema } from 'src/forms/validation';
import { Alert, Mode } from 'src/components/ui/Alert';
import Loading from 'src/components/ui/Loading';

const OnboardingProfile = () => {
    const [flash, setFlash] = useState(undefined);
    const history = useHistory();
    const { data: currentUserData } = useGetCurrentUserProfileQuery();

    // mutation to update the profile
    const [updateProfileMutation] = useUpdateProfileMutation();

    // execute the profile update mutation
    const updateProfile = async (data) => {
        const values = updateOneProfileSchema.cast(data);
        // delete this pseudo attribute from the data to submit
        delete values.originalNickname;
        try {
            await updateProfileMutation({
                variables: {
                    id: data.id,
                    profileUpdateInput: values,
                },
            });
            history.push('/onboarding/skills');
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
                <p className="my-2">Allright, thanks for signing-up! 🙌</p>
                <p className="my-2">
                    Let&apos;s get started building your profile. You can always edit this information later.
                </p>
                <ProfileForm
                    profile={currentUserData.currentUser.profile}
                    updateProfile={updateProfile}
                    buttonValue="Next"
                />
            </>
        );
    }
};

export default OnboardingProfile;
