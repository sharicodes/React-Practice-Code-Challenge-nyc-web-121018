import React, { Fragment } from "react";

const Sushi = props => {
  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */
        true ? null : <img src={props.aSushi.img_url} alt="" width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.aSushi.name} - ${props.aSushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
