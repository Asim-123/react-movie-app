import { createSlice } from '@reduxjs/toolkit'


export const homeSlice = createSlice({
  name: 'homeslice',
  initialState: {
  data: {},
  },
  reducers: {
   getUrlApi: (state, action) => {
   state.data = action.payload
   },
  },
})

// Action creators are generated for each case reducer function
export const { getUrlApi, getGenrs } = homeSlice.actions

export default homeSlice.reducer