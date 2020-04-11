import React from "react";

function generateCarString(car) {
  return `Congrats on your new ${car.name}${
    car.features.length === 0
      ? "!"
      : car.features.length === 1
      ? " with " + car.features[0].name + "!"
      : " with" +
        car.features.map(
          (feature, i, features) =>
            (i + 1 === features.length ? " and " : " ") + feature.name
        ) +
        "!"
  }`;
}

const Total = (props) => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
      <button
        className="button"
        onClick={() => {
          alert(generateCarString(props.car));
          props.buyCar();
        }}
      >
        Buy
      </button>
    </div>
  );
};

export default Total;
