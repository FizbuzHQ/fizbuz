import * as React from 'react';
import { useUserListQuery } from '../../generated/graphql';
import UserList from './UserList';

const UserListContainer = () => {
    const { data, error, loading } = useUserListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <UserList data={data} />;
};

export default UserListContainer;
