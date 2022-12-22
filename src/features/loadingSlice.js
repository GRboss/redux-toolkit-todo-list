import { createSlice } from '@reduxjs/toolkit'
import { fetchSettings } from './settingsSlice'

const initialState = false

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state = action.payload.loading
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSettings.pending, () => {
      return true
    })

    builder.addCase(fetchSettings.fulfilled, () => {
      return false
    })

    builder.addCase(fetchSettings.rejected, () => {
      return false
    })
  }
})

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer