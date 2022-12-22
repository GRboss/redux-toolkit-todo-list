import { useSelector } from 'react-redux'

function Footer() {
  const status = useSelector(state => state.status)

  return <p>{status}</p>
}

export default Footer