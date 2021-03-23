import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://hn.algolia.com/api/v1/search?query=react")
      .then(({ data }) => setArticels(data.hits))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    return () => {};
  }, []);
  return (
    <ul>
      {articles.map(({ objectID, title, url }) => (
        <li key={objectID}>
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  );
};

export default News;
// http://hn.algolia.com/api/v1/search?query=...
