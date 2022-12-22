import { createSlice, nanoid } from '@reduxjs/toolkit'
import { setStatus } from './statusSlice'

/**
 * {
 *   id: 8 Enhanced by the slice
 *   title: 'Milk',
 *   completed: false,
 *   timestamp: 2022... Enhanced by the slice
 *   labelId: 2
 * }
 */
const initialState = [
  {
    id: 'OPs5WE5f2AJZ8uIRmpO_o',
    title: 'gfg',
    completed: false,
    timestamp: '2022-12-22T10:49:05.877Z',
    labelId: null
  },
  {
    id: 'VupFnOtiafzs30XUhOdHS',
    title: 'fdgdfgdfg',
    completed: false,
    timestamp: '2022-12-22T10:50:30.391Z',
    labelId: null
  }
]

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (newItem) => {
        const id = nanoid()
        const timestamp = (new Date()).toISOString()
        return {
          payload: {
            id,
            title: newItem.title,
            completed: false,
            timestamp,
            labelId: null
          }
        }
      },
    },
    removeItem: (state, action) => {
      console.log(state)
      return state.filter(item => item.id !== action.payload.id)
    },
    updateItem: {
      reducer: (state, action) => {
        const index = state.findIndex(item => item.id === action.payload.id)
        if (index > -1) {
          state[index].title = action.payload.title
          state[index].timestamp = action.payload.timestamp
          return state
        }
        return state
      },
      prepare: (id, newText) => {
        const timestamp = (new Date()).toISOString()
        return {
          payload: {
            id,
            title: newText,
            timestamp,
          }
        }
      },
    },
    toggleCompleted: (state, action) => {
      const item = state.find(item => item.id === action.payload.id)
      item.completed = !item.completed
    },
  }
})

export const { addItem, removeItem, updateItem, toggleCompleted } = itemsSlice.actions

export const asyncAddItem = (data) => {
  return (dispatch, getState) => {
    const { items, settings } = getState()
      if (items.length < settings.maxItems) {
        dispatch(addItem(data))
      } else {
        dispatch(setStatus({status: `Max limit of ${settings.maxItems} items has been reached.`}))
        setTimeout(() => {
          dispatch(setStatus({status: ''}))
        }, 2000)
      }
  }
}

export default itemsSlice.reducer