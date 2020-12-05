import React, { Component } from "react";
import { BulletList } from "react-content-loader";

import NewsList from "./NewsList/NewsList";
import { fetchArticlesWithQuerry } from "../../services/articleApi";
import styles from "./News.module.css";

export default class App extends Component {
  state = {
    articles: [],
    query: "react",
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = this.state;
    this.setState({ isLoading: true });

    fetchArticlesWithQuerry(query)
      .then((data) => this.setState({ articles: data }))
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      fetchArticlesWithQuerry(query)
        .then((data) => this.setState({ articles: data }))
        .catch((error) => this.setState({ error }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { articles, query, isLoading, error } = this.state;

    return (
      <div>
        <h1 className={styles.header}> News </h1>
        <label htmlFor="query">
          Find
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={this.handleChange}
          />
        </label>
        {error && <p>Something went wrong : {error.message}</p>}
        {isLoading ? <BulletList /> : <NewsList articlesList={articles} />}
      </div>
    );
  }
}
