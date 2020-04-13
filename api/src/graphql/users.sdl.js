export const schema = gql`
  type User {
    id: String!
    auth0Sub: String!
    email: String!
    productEmail: Boolean!
    promotionalEmail: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime
    deletedAt: DateTime
  }

  type Query {
    users: [User]
    user(id: String!): User
  }

  input UserInput {
    auth0Sub: String
    email: String
    productEmail: Boolean
    promotionalEmail: Boolean
    updatedAt: DateTime
    deletedAt: DateTime
  }

  type Mutation {
    createUser(input: UserInput!): User
    updateUser(id: String!, input: UserInput!): User
    deleteUser(id: String!): User
  }
`
