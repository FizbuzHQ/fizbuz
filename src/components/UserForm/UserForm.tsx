import * as React from 'react';
import { useForm } from 'react-hook-form';
import { UserUpdateInput } from '../../generated/graphql';
import Input from '../Tailwind/Input';

// import './styles.css';

const UserForm = ({ mutation, userData }) => {
    // console.log('UserForm', userData);
    const { register, handleSubmit, errors } = useForm<UserUpdateInput>({
        defaultValues: userData.user,
    });
    const onSubmit = (data) => {
        mutation({
            variables: {
                userInput: data,
            },
        });
    };
    console.log(errors);
    return (
        <div>
            <h3>User Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    display="Email"
                    field="email"
                    placeholder="you@example.com"
                    validationRef={register({ required: true, pattern: /^\S+@\S+$/i })}
                    errors={errors}
                    errorMessage="Must be a valid email address"
                />
                <input
                    type="text"
                    placeholder="Auth0Sub"
                    name="auth0Sub"
                    ref={register({ required: 'its fucking required', maxLength: 100 })}
                />
                {errors.auth0Sub && <span>{errors.auth0Sub.message}</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default UserForm;
