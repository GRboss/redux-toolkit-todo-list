import {useEffect, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { addItem, updateItem, asyncAddItem } from '../features/itemsSlice'

function Form() {
  const textRef = useRef(null)
  const dispatch = useDispatch(null)
  const items = useSelector(state => state.items)
  const selected = useSelector(state => state.selected)
  const [ text, setText ] = useState('')

  useEffect(() => {
    if (selected !== null) {
      const selectedItem = items.find(item => item.id === selected)
      setText(selectedItem.title)
    }
  },[items, selected, setText])

  useEffect(() => {
    textRef.current.focus()
  },[])

  const handleClick = () => {
    if (selected === null) {
      // dispatch(addItem({
      //   title: textRef.current.value
      // }))
      dispatch(asyncAddItem({
        title: textRef.current.value
      }))
    } else {
      dispatch(updateItem(selected, textRef.current.value))
    }
    setText('')
    textRef.current.focus()
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <div>
        <textarea ref={textRef} value={text} onChange={handleChange}/>
      </div>
      <div>
        <button onClick={handleClick}>Save</button>
      </div>
    </div>
  )
}

export default Form