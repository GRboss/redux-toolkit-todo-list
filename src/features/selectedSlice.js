import { createSlice } from '@reduxjs/toolkit'
import { updateItem } from './itemsSlice'

const initialState = null

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state = action.payload.id
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(updateItem, () => {
      return null
    })
  }
})

export const { setSelected } = selectedSlice.actions

export default selectedSlice.reducer