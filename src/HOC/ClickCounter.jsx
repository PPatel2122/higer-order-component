import React from "react"
import UpdateComp from "./UpdateComp";
import '../App.css'

const ClickCounter = ({ count, incrementCount }) => {
  console.log(incrementCount);
  return <button onClick={incrementCount}> Count {count} Times </button>;
};

export default UpdateComp(ClickCounter);