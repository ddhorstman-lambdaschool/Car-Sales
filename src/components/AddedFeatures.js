import React from "react";

import AddedFeature from "./AddedFeature";

import { removeFeature } from "../actions";
import { connect } from "react-redux";

function AddedFeatures(props) {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map((item) => (
            <AddedFeature
              key={item.id}
              {...item}
              //careful to use the version from props and not the original!
              removeFeature={props.removeFeature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
}

export default connect(
  ({ car: { features } }) => {
    return { features };
  },
  { removeFeature }
)(AddedFeatures);
