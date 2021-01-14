import React, { useContext } from "react";
// import withReaderContext from "../../HOC/withReaderContext";
import { ReaderContext } from "./Reader";

const Publictaion = ( ) => {
    const { publication } = useContext(ReaderContext);
  return (
    <article>
      <h2>{publication.title.slice(0, 20)}...</h2>
      <p>{publication.text.slice(0, 40)}...</p>
    </article>
  );
};

export default Publictaion;
