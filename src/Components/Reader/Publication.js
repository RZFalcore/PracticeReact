import React from "react";
import withReaderContext from "../../HOC/withReaderContext";

const Publictaion = ({  publication  }) => (
  <article>
    <h2>{publication.title.slice(0, 20)}...</h2>
    <p>{publication.text.slice(0, 40)}...</p>
  </article>
);

export default withReaderContext(Publictaion);
