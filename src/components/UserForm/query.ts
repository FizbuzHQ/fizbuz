import gql from 'graphql-tag';

const QUERY_USER = gql`
    query User($id: String!) {
        user(where: { id: $id }) {
            id
            email
            auth0Sub
        }
    }
`;

export default QUERY_USER;
