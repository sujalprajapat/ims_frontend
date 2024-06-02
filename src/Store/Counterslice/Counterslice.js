import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: false,
  },
  reducers: {
    check: (state) => {
      state.value = localStorage.getItem('token') == undefined ? false : true
    },
  },
})

// Action creators are generated for each case reducer function
export const { check } = counterSlice.actions

export default counterSlice.reducer