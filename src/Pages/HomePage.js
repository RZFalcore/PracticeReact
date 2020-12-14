import React from "react";
import queryString from "query-string";

const Home = (props) => {
  const location = queryString.parse(props.location);
  console.log(location);
  return <h1>Welcome!</h1>;
};

export default Home;
