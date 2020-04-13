import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_POST_MUTATION = gql`
  mutation DeleteUserMutation($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const UsersList = ({ users }) => {
  const [deleteUser] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <div className="bg-white text-gray-900 border rounded-lg overflow-x-scroll">
      <table className="table-auto w-full min-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="font-semibold text-left p-3">id</th>
            <th className="font-semibold text-left p-3">auth0Sub</th>
            <th className="font-semibold text-left p-3">email</th>
            <th className="font-semibold text-left p-3">productEmail</th>
            <th className="font-semibold text-left p-3">promotionalEmail</th>
            <th className="font-semibold text-left p-3">createdAt</th>
            <th className="font-semibold text-left p-3">updatedAt</th>
            <th className="font-semibold text-left p-3">deletedAt</th>
            <th className="font-semibold text-left p-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="odd:bg-gray-100 even:bg-white border-t"
            >
              <td className="p-3">{truncate(user.id)}</td>
              <td className="p-3">{truncate(user.auth0Sub)}</td>
              <td className="p-3">{truncate(user.email)}</td>
              <td className="p-3">{truncate(user.productEmail)}</td>
              <td className="p-3">{truncate(user.promotionalEmail)}</td>
              <td className="p-3">{timeTag(user.createdAt)}</td>
              <td className="p-3">{timeTag(user.updatedAt)}</td>
              <td className="p-3">{timeTag(user.deletedAt)}</td>
              <td className="p-3 pr-4 text-right whitespace-no-wrap">
                <nav>
                  <ul>
                    <li className="inline-block">
                      <Link
                        to={routes.user({ id: user.id })}
                        title={'Show user ' + user.id + ' detail'}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Show
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        to={routes.editUser({ id: user.id })}
                        title={'Edit user ' + user.id}
                        className="text-xs bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Edit
                      </Link>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        title={'Delete user ' + user.id}
                        className="text-xs bg-gray-100 text-red-600 hover:bg-red-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                        onClick={() => onDeleteClick(user.id)}
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
