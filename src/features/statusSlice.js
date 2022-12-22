import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state = action.payload.status
      return state
    }
  }
})

export const { setStatus } = statusSlice.actions

export default statusSlice.reducer