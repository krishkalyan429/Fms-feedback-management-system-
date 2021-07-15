import React from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counterAction";

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
      <h1 style={{ marginLeft: "10px", marginRight: "10px" }}>{counter}</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
    </div>
  );
};

export default Counter;
