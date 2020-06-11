import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import gql from 'graphql-tag';
import { useApolloClient } from '@apollo/react-hooks';
import { useGetOnboardingProfileQuery, useUpdateOnboardingProfileMutation } from 'src/generated/graphql';
import { CHECK_NICKNAME_QUERY } from 'src/graphql/common';
import Input from 'src/components/ui/Input';
import Button from 'src/components/ui/Button';
import Loading from 'src/components/ui/Loading';
import { Alert, Mode } from 'src/components/ui/Alert';

gql`
    fragment OnboardingProfileInfo on Profile {
        id
        nickname
        name
    }

    query GetOnboardingProfile {
        currentUser {
            id
            profile {
                ...OnboardingProfileInfo
            }
        }
    }

    mutation UpdateOnboardingProfile($profileUpdateInput: ProfileUpdateInput!, $id: String!) {
        updateOneProfile(data: $profileUpdateInput, where: { id: $id }) {
            ...OnboardingProfileInfo
        }
    }
`;

const OnboardingProfile = () => {
    const [flash, setFlash] = useState(undefined);

    const { data } = useGetOnboardingProfileQuery();

    const [updateProfileMutation] = useUpdateOnboardingProfileMutation();

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
                    nickname: nickname.toLowerCase(),
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
        //console.log('useEffect, data has changed: ', data);
        if (data) {
            reset({ ...data.currentUser.profile, originalNickname: data.currentUser.profile.nickname });
            setFormReady(true);
        }
    }, [data]);

    // execute the profile update mutation
    const onSubmit = async (formData) => {
        if (isValid) {
            try {
                const id = data.currentUser.profile.id;
                const profileUpdateInput = {
                    nickname: formData.nickname,
                    nicknameSearch: formData.nicknameSearch,
                    name: formData.name,
                };
                await updateProfileMutation({
                    variables: { id, profileUpdateInput },
                });
                history.push('/onboarding/skills');
            } catch (error) {
                setFlash({ mode: Mode.ERROR, message: 'mutation failed, possibly because of validation errors' });
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
