import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Test = () => {
  const count = useSelector((state) => state);
  return <div style={{ marginTop: "70px" }}>{count}</div>;
};

export default Test;
