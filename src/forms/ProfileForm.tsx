import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useApolloClient } from '@apollo/react-hooks';
import { CHECK_NICKNAME_QUERY } from 'src/graphql/common';
import Input from 'src/components/ui/Input';
import Button from 'src/components/ui/Button';
import Loading from 'src/components/ui/Loading';

const ProfileForm = ({ profile, updateProfile }) => {
    //const [flash, setFlash] = useState(undefined);
    const apolloClient = useApolloClient();

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
    const { register, handleSubmit, errors, reset, formState } = useForm({
        validationSchema: updateOneProfileSchema,
        mode: 'onBlur',
    });

    const { isValid } = formState;

    // set the data in the form based on the profile data from the DB
    useEffect(() => {
        if (profile) {
            reset({ ...profile, originalNickname: profile.nickname });
            setFormReady(true);
        }
    }, [profile]);

    const onSubmit = async (data) => {
        if (isValid) {
            updateProfile(data);
        }
    };

    if (!formReady) {
        return <Loading />;
    } else {
        return (
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
                        Update
                    </Button>
                </p>
            </form>
        );
    }
};

export default ProfileForm;
