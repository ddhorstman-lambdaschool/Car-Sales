import React from "react";

import { removeFeature } from "../actions";
import {connect} from "react-redux";

const AddedFeature = (props) => {
  return (
    <li>
      <button
        onClick={() => props.removeFeature(props.feature.id)}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(() => {return {};}, { removeFeature })(AddedFeature);
