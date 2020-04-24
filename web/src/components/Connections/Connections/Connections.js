import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_POST_MUTATION = gql`
  mutation DeleteConnectionMutation($id: String!) {
    deleteConnection(id: $id) {
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

const ConnectionsList = ({ connections }) => {
  const [deleteConnection] = useMutation(DELETE_POST_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete connection ' + id + '?')) {
      deleteConnection({ variables: { id }, refetchQueries: ['POSTS'] })
    }
  }

  return (
    <div className="bg-white text-gray-900 border rounded-lg overflow-x-scroll">
      <table className="table-auto w-full min-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="font-semibold text-left p-3">id</th>
            <th className="font-semibold text-left p-3">userId</th>
            <th className="font-semibold text-left p-3">connectedId</th>
            <th className="font-semibold text-left p-3">pin</th>
            <th className="font-semibold text-left p-3">comment</th>
            <th className="font-semibold text-left p-3">createdAt</th>
            <th className="font-semibold text-left p-3">updatedAt</th>
            <th className="font-semibold text-left p-3">deletedAt</th>
            <th className="font-semibold text-left p-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {connections.map((connection) => (
            <tr
              key={connection.id}
              className="odd:bg-gray-100 even:bg-white border-t"
            >
              <td className="p-3">{truncate(connection.id)}</td>
              <td className="p-3">{truncate(connection.userId)}</td>
              <td className="p-3">{truncate(connection.connectedId)}</td>
              <td className="p-3">{truncate(connection.pin)}</td>
              <td className="p-3">{truncate(connection.comment)}</td>
              <td className="p-3">{timeTag(connection.createdAt)}</td>
              <td className="p-3">{timeTag(connection.updatedAt)}</td>
              <td className="p-3">{timeTag(connection.deletedAt)}</td>
              <td className="p-3 pr-4 text-right whitespace-no-wrap">
                <nav>
                  <ul>
                    <li className="inline-block">
                      <Link
                        to={routes.connection({ id: connection.id })}
                        title={'Show connection ' + connection.id + ' detail'}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Show
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        to={routes.editConnection({ id: connection.id })}
                        title={'Edit connection ' + connection.id}
                        className="text-xs bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Edit
                      </Link>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        title={'Delete connection ' + connection.id}
                        className="text-xs bg-gray-100 text-red-600 hover:bg-red-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                        onClick={() => onDeleteClick(connection.id)}
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

export default ConnectionsList
