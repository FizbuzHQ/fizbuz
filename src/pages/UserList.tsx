import * as React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useUserListQuery } from '../generated/graphql';

gql`
    query UserList {
        users {
            ...UserInfo
        }
    }
`;

const UserList = () => {
    const { data, error, loading } = useUserListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return (
        <div>
            <h3>Users</h3>
            <ol>
                {data?.users.map((user, i) => (
                    <li key={i}>
                        <Link to={`/users/${user.id}/edit`}>
                            {user.id} {user.email}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default UserList;
