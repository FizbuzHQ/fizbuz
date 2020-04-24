import UsersLayout from 'src/layouts/UsersLayout'
import UserCell from 'src/components/Users/UserCell'

const UserPage = ({ id }) => {
  return (
    <UsersLayout>
      <UserCell id={id} />
    </UsersLayout>
  )
}

export default UserPage
