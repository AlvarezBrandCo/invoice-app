import { createSlice } from '@reduxjs/toolkit'

export const modalsSlice = createSlice({
  name: 'invoices',
  initialState: {
    value: null,
    show: false,
  },
  reducers: {
    showModal: (state, action) => {
      state.modalName = action.payload
      state.show = true
      },
    hideModal: (state, action) => {
      debugger
      state.modalName = action.payload
      state.show = false
      },
  },
})

// Action creators are generated for each case reducer function
export const { showModal, hideModal } = modalsSlice.actions

export default modalsSlice.reducer
