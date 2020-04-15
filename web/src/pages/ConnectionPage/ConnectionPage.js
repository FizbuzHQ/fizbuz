import ConnectionsLayout from 'src/layouts/ConnectionsLayout'
import ConnectionCell from 'src/components/ConnectionCell'

const ConnectionPage = ({ id }) => {
  return (
    <ConnectionsLayout>
      <ConnectionCell id={id} />
    </ConnectionsLayout>
  )
}

export default ConnectionPage
