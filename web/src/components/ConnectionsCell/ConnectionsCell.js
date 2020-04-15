import { Link, routes } from '@redwoodjs/router'

import Connections from 'src/components/Connections'

export const QUERY = gql`
  query POSTS {
    connections {
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

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No connections yet. '}
      <Link
        to={routes.newConnection()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ connections }) => {
  return <Connections connections={connections} />
}
