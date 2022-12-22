import { useSelector } from 'react-redux'
import ListItem from './ListItem'

function List() {
  const items = useSelector(state => state.items)
  return (
    <div>
      {
        items.map(item => <ListItem key={item.id} id={item.id} title={item.title} completed={item.completed} timestamp={item.timestamp} />)
      }
    </div>
  )
}

export default List