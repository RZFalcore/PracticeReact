import React from "react";

const Loader = ({ error, timeout, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        <h2>Error!</h2>
        <button onClick={retry}>Retry</button>
      </div>
    );
  }

  if (timeout) {
    return (
      <div>
        <h2>Taking too much time :/ </h2>
        <button onClick={retry}>Retry</button>
      </div>
    );
  }

  if (pastDelay) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return null;
};

export default Loader;
