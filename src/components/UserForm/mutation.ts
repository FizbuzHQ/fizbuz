import gql from 'graphql-tag';

const MUTATION_UPDATE_USER = gql`
    mutation UpdateUser($id: String!, $userInput: UserUpdateInput!) {
        updateOneUser(data: $userInput, where: { id: $id }) {
            id
            email
            auth0Sub
        }
    }
`;

export default MUTATION_UPDATE_USER;
