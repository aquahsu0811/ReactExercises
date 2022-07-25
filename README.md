# UseEffect - side effect
### _useEffect(function, dependency);_
Render UI and react to user input is reactjs main job.
Side effect is anything else than that, like store data in browser storage, send http requests to backend servers, set timers...
### dependency

- blank : Call useEffect everytime.
- [empty] : It will  only run one time in the begining.
- [dependency] : Only re-render when the value is changing.

# UseReducer 
Sometimes, you have more complex state, like getting multiple states, multiple ways of changing it or dependencies to other states. useReducer can be uded as a replacement for useState, useReducer is a more powerful state management.
###  _const [state, dispatchFn]  =  useReducer(reducerFn, initialState, initFn);_

- [State] - The state snapshot used in the component re-render/re-evaluation cycle.
- [dispatchFn] - A function that can be used to dispatch a new action(ie. trigger an update of the store).
- [initialState] - Inital state.
- [initFn] - A function to set the initial state programmatically.
### _reducerFn: (prevState, action) => newState_
A function theat is triggered automatically once an action is dispatched(via dispatchFn()). It receives the lastest state snapshot and should return the newm updated state.
