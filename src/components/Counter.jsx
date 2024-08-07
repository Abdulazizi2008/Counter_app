import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "300px" }}>
      <h1>{count}</h1>
      <div className="holder">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <button
        onClick={() => dispatch(reset())}
        style={{ position: "absolute", top: 50, right: 100 }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
