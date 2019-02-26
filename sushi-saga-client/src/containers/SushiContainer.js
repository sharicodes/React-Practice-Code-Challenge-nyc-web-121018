import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  console.log(props.sushis);

  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(aSushi => {
          return <Sushi key={aSushi.id} a aSushi={aSushi} />;
        })}
        {/*
             Render Sushi components here!
          */}
        <MoreButton />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
