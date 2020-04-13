import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import UserForm from 'src/components/UserForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateUserMutation($input: UserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const NewUser = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.users())
    },
  })

  const onSave = (input) => {
    createUser({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New User</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <UserForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUser
