import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  console.log(props.sushis);

  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(aSushi => {
          return <Sushi key={aSushi.id} aSushi={aSushi} />;
        })}
        {/*
             Render Sushi components here!
          */}
        <MoreButton addSushi={props.addSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
