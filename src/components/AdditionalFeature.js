import React from "react";

import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = (props) => {
  return (
    <li>
      <button
        onClick={() => props.addFeature(props.feature.id)}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(() => {return {};}, { addFeature })(AdditionalFeature);
