import React from "react";

function Functionprops(props) {
  return (
    <div>
      <h3>This is a functional component</h3>,
      <h3>
        Hello {props.name} from {props.place}! Welcome to the Jungle
      </h3>
    </div>
  );
}
export default Functionprops;
