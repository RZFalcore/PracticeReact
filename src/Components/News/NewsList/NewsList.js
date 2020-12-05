import React from "react";

const NewsList = ({ articlesList }) => (
  <ul>
    {articlesList.map(({ created_at, url, title }) => (
      <li key={created_at}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default NewsList;
