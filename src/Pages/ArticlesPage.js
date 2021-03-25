import React, { Component, useState, useEffect } from "react";
import { useLocation, useHistory, withRouter } from "react-router-dom";
import {
  getCategoryFromLocation,
  getCategoryWithValue,
} from "../helpers/routingHelpers";

import ArticlesList from "../Components/App/ArticlesList/ArticlesList";
import Select from "../Components/App/ArticleSelect/ArticleSelect";
import * as API from "../services/API";

const categories = [
  { value: "people", label: "People" },
  { value: "starships", label: "Starships" },
  { value: "planets", label: "Planets" },
];

// export default function ArticlesPage() {
//   const [articles, setArticles] = useState([]);
//   const location = useLocation();
//   const history = useHistory();

//   useEffect(() => {
//     const category = getCategoryFromLocation(location);
//     API.getPeople(category).then((data) => setArticles(data.results));

//     history.push({ history, search: `category=people` });
//   }, []);

//   return (
//     <div>
//       <h1>Articles Page</h1>
//       <Select
//         options={categories}
//         value={selectedCategory}
//         onChange={this.handleCategoryChange}
//       />
//       {articles.length > 0 && <ArticlesList articles={articles} />}
//     </div>
//   );
// }
class ArticlesPage extends Component {
  state = { articles: [] };

  componentDidMount() {
    const { location } = this.props;
    const category = getCategoryFromLocation(location);
    API.getPeople(category).then((data) =>
      this.setState({ articles: data.results })
    );

    this.props.history.push({
      ...this.props.location,
      search: `category=people`,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;
    const prevCategory = getCategoryFromLocation(prevProps.location);
    const nextCategory = getCategoryFromLocation(location);

    if (prevCategory !== nextCategory) {
      API.getPeople(nextCategory).then((data) =>
        this.setState({ articles: data.results })
      );
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  handleCategoryChange = (opt) => {
    this.props.history.push({
      ...this.props.location,
      search: `category=${opt.value}`,
    });
  };

  render() {
    const { articles } = this.state;
    const { location } = this.props;

    const qsCategory = getCategoryFromLocation(location) || "people";

    const selectedCategory = getCategoryWithValue(categories, qsCategory);

    return (
      <div>
        <h1>Articles Page</h1>
        <Select
          options={categories}
          value={selectedCategory}
          onChange={this.handleCategoryChange}
        />
        {articles.length > 0 && <ArticlesList articles={articles} />}
      </div>
    );
  }
}

export default withRouter(ArticlesPage);
