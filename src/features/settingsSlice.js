import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  maxItems: null,
}

function getSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        maxItems: 5,
      })
    }, 1000)
  })
}

export const fetchSettings = createAsyncThunk(
  'settings/fetchSettings',
  async () => {
    return await getSettings()
  }
)

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchSettings.fulfilled, (state, action) => {
      state = action.payload
      return state
    })
  },
})

export default settingsSlice.reducer