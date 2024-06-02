import { configureStore } from '@reduxjs/toolkit'
import Counterslice from './Counterslice/Counterslice'

export default configureStore({
  reducer: {
    counter : Counterslice
  },
})