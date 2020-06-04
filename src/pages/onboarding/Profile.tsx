import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory /*, useLocation*/ } from 'react-router-dom';
import * as yup from 'yup';
import gql from 'graphql-tag';
import { useApolloClient } from '@apollo/react-hooks';
import { useUserSessionQuery, useProfileQuery, useUpdateProfileMutation } from 'src/generated/graphql';
import Input from 'src/components/ui/Input';
import Button from 'src/components/ui/Button';
import Loading from 'src/components/ui/Loading';
import Alert from 'src/components/ui/Alert';

gql`
    mutation UpdateProfile($profileUpdateInput: ProfileUpdateInput!, $id: String!) {
        updateOneProfile(data: $profileUpdateInput, where: { id: $id }) {
            nickname
            name
        }
    }
`;

const CHECK_NICKNAME_QUERY = gql`
    query ProfileByNickname($nickname: String!) {
        profile(where: { nickname: $nickname }) {
            nickname
        }
    }
`;

const OnboardingProfile = () => {
    const [flash, setFlash] = useState(undefined);

    //const location = useLocation();

    // get user ID from global state
    const { data: userSessionData } = useUserSessionQuery();

    //console.log(userSessionData);

    // if no profile data in location.state (i.e. page re-load) use user ID to load profile record from DB
    const { data: profileData } = useProfileQuery({
        skip: userSessionData === undefined,
        variables: {
            userId: userSessionData && userSessionData.userSession.userId,
        },
    });

    // mutation to update the profile
    const [updateProfileMutation] = useUpdateProfileMutation();

    const apolloClient = useApolloClient();

    const history = useHistory();

    const [formReady, setFormReady] = useState(false);

    // return true if the nickname exists in our DB, false otherwise
    const checkNickname = async (nickname) => {
        let check = true;
        if (nickname) {
            const result = await apolloClient.query({
                query: CHECK_NICKNAME_QUERY,
                variables: {
                    nickname,
                },
            });
            check = !(result.data && result.data.profile);
        }
        return check;
    };

    // let Yup know how to validate that the nickname is unique
    yup.addMethod(yup.string, 'uniqueNickname', function (message) {
        return this.test({
            name: 'uniqueNickname',
            //exclusive: true,
            message,
            test: async function (value) {
                if (this.parent.nickname !== this.parent.originalNickname) {
                    return await checkNickname(value);
                } else {
                    return true;
                }
            },
        });
    });

    //
    const updateOneProfileSchema = yup.object().shape({
        name: yup.string().min(3).required(),
        nickname: yup.string().min(5).uniqueNickname('Sorry, that nickname is taken').required(),
    });

    // profile form
    const { register, handleSubmit, errors, reset, formState } = useForm(
        /*<ProfileUpdateInput>*/ {
            validationSchema: updateOneProfileSchema,
            mode: 'onBlur',
        },
    );

    const { isValid } = formState;

    // set the data in the form based on the profile data from the DB
    useEffect(() => {
        //console.log('useEffect, profileData has changed: ', profileData);
        if (profileData) {
            reset({ ...profileData.user.profile, originalNickname: profileData.user.profile.nickname });
            setFormReady(true);
        }
    }, [profileData]);

    // execute the profile update mutation
    const onSubmit = async (data) => {
        if (isValid) {
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
                history.push('/onboarding/skills');
            } catch (error) {
                setFlash('mutation failed, possibly because of validation errors');
            }
        }
    };

    if (!formReady) {
        return <Loading />;
    } else {
        return (
            <>
                <h1>Create Profile</h1>
                {flash && (
                    <div className="p-1">
                        <Alert message={flash} />
                    </div>
                )}
                <p className="p-1 my-2">Blah blah blah</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="id" ref={register} />
                    <input type="hidden" name="originalNickname" ref={register} />
                    <Input
                        addOn="https://fizbuz.com/u/"
                        display="Nickname"
                        field="nickname"
                        register={register}
                        errors={errors}
                    />
                    <Input display="Full Name" field="name" register={register} errors={errors} />
                    <p className="">
                        <Button mode="primary" onClick={handleSubmit(onSubmit)}>
                            Next
                        </Button>
                    </p>
                </form>
            </>
        );
    }
};

export default OnboardingProfile;
