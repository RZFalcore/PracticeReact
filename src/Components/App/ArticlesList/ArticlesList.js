import React from "react";
import { Link, withRouter } from "react-router-dom";

const ArticlesList = ({ articles, match }) => (
  <ul>
    {articles.map((article, index) => (
      <li key={article.created}>
        <Link to={`${match.path}/${index + 1}`}>{article.name}</Link>
      </li>
    ))}
  </ul>
);

export default withRouter(ArticlesList);
