import { configureStore } from '@reduxjs/toolkit'
import latestIdReducer from './latestIdSlice'
import modalReducer from './modalReducer'

export default configureStore({
  reducer: {
    invoices: latestIdReducer,
    modals: modalReducer
  },
})
