import * as React from 'react';
import { UserListQuery } from '../../generated/graphql';
// import './styles.css';

interface Props {
    data: UserListQuery;
}

const UserList: React.FC<Props> = ({ data }) => (
    <div>
        <h3>Users</h3>
        <ol>
            {data?.users.map((user, i) => (
                <li key={i}>
                    {user.id} {user.email}
                </li>
            ))}
        </ol>
    </div>
);

export default UserList;
