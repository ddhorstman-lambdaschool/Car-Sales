import React from "react";
import AdditionalFeature from "./AdditionalFeature";

import { connect } from "react-redux";
import { addFeature } from "../actions";

function AdditionalFeatures(props) {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item) => (
            <AdditionalFeature
              key={item.id}
              {...item}
              //careful to use the version from props and not the original!
              addFeature={props.addFeature}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
}

export default connect(
  ({ additionalFeatures }) => {
    return { additionalFeatures };
  },
  { addFeature }
)(AdditionalFeatures);
