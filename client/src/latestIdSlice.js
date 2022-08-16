import { createSlice } from '@reduxjs/toolkit'
import data from './data.json';

const dataById = Object.values(data).reduce((accum, curr) => {
  const id = curr.id;
  return {
    ...accum,
    [curr.id]: {
      ...curr
    }
  }
}, {})
export const invoiceSlice = createSlice({
  name: 'invoices',
  initialState: {
    value: dataById,
    num: 0,
    loading: false
  },
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload
      },
    deleteId: (state, action) => {
      state.loading = true;
      const id = action.payload
      delete state.value[id]
    },
    markPaid: (state, action) => {
      const id = action.payload
      state.value[id].status = "paid"
    },
    updateInvoice: (state, action) => {
      const {id, body} = action.payload;
      const test = state.value[id] = {...body}
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { loading, increment, deleteId, markPaid, updateInvoice, incrementByAmount } = invoiceSlice.actions

export const incrementAsync = (id) => (dispatch) => {
  return dispatch(deleteId(id))
}

export default invoiceSlice.reducer
