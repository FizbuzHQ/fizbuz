import ConnectionsLayout from 'src/layouts/ConnectionsLayout'
import EditConnectionCell from 'src/components/Connections/EditConnectionCell'

const EditConnectionPage = ({ id }) => {
  return (
    <ConnectionsLayout>
      <EditConnectionCell id={id} />
    </ConnectionsLayout>
  )
}

export default EditConnectionPage
