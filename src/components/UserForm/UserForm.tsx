import * as React from 'react';
import { useForm } from 'react-hook-form';
import { UserUpdateInput } from '../../generated/graphql';
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
    return (
        <div>
            <h3>User Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Auth0Sub"
                    name="auth0Sub"
                    ref={register({ required: 'its fucking required', maxLength: 100 })}
                />
                {errors.auth0Sub && <span>{errors.auth0Sub.message}</span>}
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default UserForm;
