import Connection from 'src/components/Connection'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: String!) {
    connection: connection(id: $id) {
      id
      userId
      connectedId
      pin
      comment
      createdAt
      updatedAt
      deletedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Connection not found</div>

export const Success = ({ connection }) => {
  return <Connection connection={connection} />
}
