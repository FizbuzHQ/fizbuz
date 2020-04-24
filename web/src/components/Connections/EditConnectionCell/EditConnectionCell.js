import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ConnectionForm from 'src/components/Connections/ConnectionForm'

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
const UPDATE_POST_MUTATION = gql`
  mutation UpdateConnectionMutation(
    $id: String!
    $input: UpdateConnectionInput!
  ) {
    updateConnection(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ connection }) => {
  const [updateConnection, { loading, error }] = useMutation(
    UPDATE_POST_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.connections())
      },
    }
  )

  const onSave = (input, id) => {
    updateConnection({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">
          Edit Connection {connection.id}
        </h2>
      </header>
      <div className="bg-gray-100 p-4">
        <ConnectionForm
          connection={connection}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
