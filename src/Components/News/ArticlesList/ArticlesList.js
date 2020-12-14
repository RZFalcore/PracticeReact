import React from "react";
import { Link, withRouter } from "react-router-dom";

const ArticlesList = ({ articles, match, location }) => {
  
  return (
    <ul>
      {articles.map((article, index) => (
        <li key={article.created}>
          <Link
            to={{
              pathname: `${match.path}/${index + 1}`,
              state: { from: location },
            }}
            search={location.search}
          >
            {article.name}
          </Link>
        </li>
      ))}
    </ul>
  );;;
};

export default withRouter(ArticlesList);
