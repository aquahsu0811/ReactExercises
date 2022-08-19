# Redux
A state management system for cross-component or app-wide state.
### Redux Concetps
Reducer Function: Not useReduer, it just a general concept. Ruducer function is pure javascript, called by redux library.





### index.js - store
```
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
```

### auth.js
```
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){
        state.isAuthenticated = true;
        },
        logout(state){
        state.isAuthenticated = false;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
```

