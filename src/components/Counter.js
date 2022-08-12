
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const decrementHandler = () =>{
    dispatch(counterActions.decrement());
  }

  const increaseHandler = () =>{
    dispatch(counterActions.increase(10)); //{type: SOME_UNIQUE_IDENTIFIER, payload:10}
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
