import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter';


const store = configureStore({
  reducer:
  {
    counter: counterReducer,
    auth: authReducer //{ counter: counterSlice.reducer}
  },
})


export default store;