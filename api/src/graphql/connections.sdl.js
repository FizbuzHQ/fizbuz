export const schema = gql`
  type Connection {
    id: String!
    user: User!
    userId: String!
    connected: User!
    connectedId: String!
    pin: String!
    comment: String
    createdAt: DateTime!
    updatedAt: DateTime
    deletedAt: DateTime
  }

  type Query {
    connections: [Connection!]!
    connection(id: String!): Connection!
  }

  input CreateConnectionInput {
    userId: String!
    connectedId: String!
    pin: String!
    comment: String
    updatedAt: DateTime
    deletedAt: DateTime
  }

  input UpdateConnectionInput {
    userId: String
    connectedId: String
    pin: String
    comment: String
    updatedAt: DateTime
    deletedAt: DateTime
  }

  type Mutation {
    createConnection(input: CreateConnectionInput!): Connection!
    updateConnection(id: String!, input: UpdateConnectionInput!): Connection!
    deleteConnection(id: String!): Connection!
  }
`
