import React, { Component } from "react";
// import { Route } from "react-router-dom";

import ArticlesList from "../Components/App/ArticlesList/ArticlesList";
// import Article from "./ArticlePage";
import * as API from "../services/API";

export default class ArticlesPage extends Component {
  state = { articles: [] };
  componentDidMount() {
    API.getPeople().then((data) => this.setState({ articles: data.results }));
  }
  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1>Articles Page</h1>
        {articles.length > 0 && <ArticlesList articles={articles} />}
        {/* <Route to={`${this.props.match.path}/:articleID`} component={Article} /> */}
      </div>
    );
  }
}
