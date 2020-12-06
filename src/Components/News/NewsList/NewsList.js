import React from "react";
import PropTypes from "prop-types";


const NewsList = ({ articlesList }) => (
  <ul>
    {articlesList.map(({ id, link, title }) => (
      <li key={id}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

NewsList.propTypes = {
  articlesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewsList;
