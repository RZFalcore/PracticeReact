import React, { Component } from "react";
import { BulletList } from "react-content-loader";

import NewsList from "./NewsList/NewsList";
import SearchForm from "./SearchForm/SearchForm";
import ErrorNotification from "./ErrorNotification/ErrorNotification";
import * as articleAPI from "../../services/articleApi";
import mapper from "../../helpers/articleMapper";
import styles from "./News.module.css";


export default class App extends Component {
  state = {
    articles: [],
    query: "js",
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = this.state;
    this.setState({ isLoading: true });

    this.fetchArticles(query);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      this.fetchArticles(query);
    }
  }

  fetchArticles = (query) => {
    articleAPI
      .fetchArticlesWithQuerry(query)
      .then((data) => this.setState({ articles: mapper(data) }))
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { articles, query, isLoading, error } = this.state;
    return (
      <div>
        <h1 className={styles.header}> News </h1>
        <SearchForm query={query} onChange={this.handleChange} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <BulletList />}
        {articles.length > 0 && <NewsList articlesList={articles} />}
      </div>
    );
  }
}
