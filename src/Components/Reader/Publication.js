import React from "react";
import Reader from "./Reader";

const Publictaion = () => (
  <Reader.Consumer>
    {(context) => {
      return (
        <article>
          <h2>{context.publication.title.slice(0, 20)}...</h2>
          <p>{context.publication.text.slice(0, 40)}...</p>
        </article>
      );
    }}
  </Reader.Consumer>
);

export default Publictaion;
