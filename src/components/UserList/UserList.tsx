import * as React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to={`/users/${user.id}/edit`}>
                        {user.id} {user.email}
                    </Link>
                </li>
            ))}
        </ol>
    </div>
);

export default UserList;
