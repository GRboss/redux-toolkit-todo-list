import { useDispatch } from 'react-redux'
import { removeItem } from '../features/itemsSlice'
import { toggleCompleted } from '../features/itemsSlice'
import { setSelected } from '../features/selectedSlice'

function ListItem(props) {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeItem({id}))
  }

  const handleCompleted = (id) => {
    dispatch(toggleCompleted({id}))
  }

  const handleSelected = (id) => {
    dispatch(setSelected({id}))
  }

  return (
    <div className="listItem" onClick={() => handleSelected(props.id)}>
      <table>
        <tbody>
          <tr>
            <td>
              {props.title}
            </td>
            <td>
              <button onClick={(e) => {e.stopPropagation();handleDelete(props.id)}}>D</button>
              <button onClick={(e) => {e.stopPropagation();handleCompleted(props.id)}}>C</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>{props.timestamp}</div>
    </div>
  )
}

export default ListItem