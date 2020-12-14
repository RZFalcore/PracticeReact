import React from "react";
import { withRouter } from "react-router-dom";

const Article = ({ name, gender, birth_year, onGoBack }) => (
  <div>
    <h3>{name}</h3>
    {/* <p>
      <b>Gender:</b> {gender}
    </p>
    <p>
      <b>Birth year:</b> {birth_year}
    </p> */}
    <button type="button" onClick={onGoBack}>
      Go back
    </button>
  </div>
);

export default withRouter(Article);
