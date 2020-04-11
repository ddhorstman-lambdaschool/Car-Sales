import React from "react";

import { buyCar } from "../actions";
import { connect } from "react-redux";

const Total = (props) => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
      <button
        className="button"
        onClick={() => {
          console.log(props.car.features);
          alert(
            `Congrats on your new ${props.car.name}${
              props.car.features.length === 0
                ? "!"
                : props.car.features.length === 1
                ? " with " + props.car.features[0].name + "!"
                : " with" +
                  props.car.features.map(
                    (feature, i, features) =>
                      (i + 1 === features.length ? " and " : " ") + feature.name
                  ) +
                  "!"
            }`
          );
          props.buyCar();
        }}
      >
        Buy
      </button>
    </div>
  );
};

export default connect(
  () => {
    return {};
  },
  { buyCar }
)(Total);
