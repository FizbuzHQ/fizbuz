import gql from 'graphql-tag';

const CHECK_NICKNAME_QUERY = gql`
    query ProfileByNickname($nickname: String!) {
        profile(where: { nicknameSearch: $nickname }) {
            id
        }
    }
`;

const CURRENT_USER_QUERY = gql`
    query CurrentUser {
        currentUser {
            id
            profile {
                id
                name
                photo
            }
        }
    }
`;

export { CHECK_NICKNAME_QUERY, CURRENT_USER_QUERY };
