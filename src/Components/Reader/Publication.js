import React from "react";
import Reader from "./Reader";

const Publictaion = () => (
  <Reader.Consumer>
    {({ publication }) => {
      return (
        <article>
          <h2>{publication.title.slice(0, 20)}...</h2>
          <p>{publication.text.slice(0, 40)}...</p>
        </article>
      );
    }}
  </Reader.Consumer>
);

export default Publictaion;
