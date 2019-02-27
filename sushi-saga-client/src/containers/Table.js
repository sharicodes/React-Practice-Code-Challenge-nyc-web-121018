import React, { Fragment } from "react";

const Table = props => {
  const renderPlates = array => {
    // console.log("hello");
    return array.map((x, index) => {
      console.log("hello");
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };
  console.log(props.plateCounter);

  let platesArray = [];
  for (let i = 0; i < props.plateCounter; i++) {
    platesArray.push({});
  }

  return (
    <Fragment>
      <h1 className="remaining">You have: ${props.budget} remaining!</h1>
      <div className="table">
        <div className="stack">{renderPlates(platesArray)}</div>
      </div>
    </Fragment>
  );
};

export default Table;
