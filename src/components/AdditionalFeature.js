import React from "react";

export default function AdditionalFeature(props) {
  return (
    <li>
      <button onClick={() => props.addFeature(props.id)} className="button">
        Add
      </button>
      {props.name} (+{props.price})
    </li>
  );
}
