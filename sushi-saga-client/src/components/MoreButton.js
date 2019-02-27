import React from "react";

const MoreButton = props => {
  return (
    <button
      onClick={event => {
        props.addSushi();
      }}
    >
      More sushi!
    </button>
  );
};

export default MoreButton;
