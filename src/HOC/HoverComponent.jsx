import React from "react";
import UpdateComp from "./UpdateComp";
import '../App.css'

const HoverComp = ({ count, incrementCount }) => {
  console.log(incrementCount);
  return <h2 onMouseOver={incrementCount}> Hovered {count} Times </h2>;
};

export default UpdateComp(HoverComp);