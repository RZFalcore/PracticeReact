import React from "react";
import queryString from "query-string";

const Home = (props) => {
  const location = queryString.parse(props.location);
  console.log(location);
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
};

export default Home;
