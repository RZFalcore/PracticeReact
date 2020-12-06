import React, { Component } from "react";
import { BulletList } from "react-content-loader";

import NewsList from "./NewsList/NewsList";
import SearchForm from "./SearchForm/SearchForm";
import CategorySelector from "./CategorySelector/CategorySelector";
import ErrorNotification from "./ErrorNotification/ErrorNotification";
import * as articleAPI from "../../services/articleApi";
import mapper from "../../helpers/articleMapper";
import styles from "./News.module.css";

const OPTIONS = ["html", "css", "js", "react"];
export default class App extends Component {
  state = {
    articles: [],
    query: "",
    category: "",
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = this.state;
    this.setState({ isLoading: true });

    this.fetchArticles(query);
  }

  componentDidUpdate(prevProps, prevState) {
    const { category } = this.state;

    if (prevState.category !== category) {
      this.fetchArticles(category);
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

  handleSearchChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  handleSeachSubmit = (e) => {
    const { query } = this.state;
    e.preventDefault();

    this.fetchArticles(query);
  };

  render() {
    const { articles, query, category, isLoading, error } = this.state;
    return (
      <div>
        <h1 className={styles.header}> News </h1>
        <SearchForm query={query} onChange={this.handleSearchChange} onSubmit={this.handleSeachSubmit}/>
        <CategorySelector
          options={OPTIONS}
          value={category}
          onChange={this.handleCategoryChange}
        />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <BulletList />}
        {articles.length > 0 && <NewsList articlesList={articles} />}
      </div>
    );
  }
}
