import gql from 'graphql-tag';

const QUERY_USER_LIST = gql`
    query UserList {
        users {
            id
            email
        }
    }
`;

export default QUERY_USER_LIST;
