import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ConnectionForm from 'src/components/Connections/ConnectionForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateConnectionMutation($input: CreateConnectionInput!) {
    createConnection(input: $input) {
      id
    }
  }
`

const NewConnection = () => {
  const [createConnection, { loading, error }] = useMutation(
    CREATE_POST_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.connections())
      },
    }
  )

  const onSave = (input) => {
    createConnection({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Connection</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <ConnectionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewConnection
