import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import UserForm from 'src/components/UserForm'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: String!) {
    user: user(id: $id) {
      id
      auth0Sub
      email
      productEmail
      promotionalEmail
      createdAt
      updatedAt
      deletedAt
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdateUserMutation($id: String!, $input: UserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ user }) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.users())
    },
  })

  const onSave = (input, id) => {
    updateUser({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit User {user.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <UserForm user={user} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
