import React, { Component } from "react";
import Article from "../Components/App/Article/Article";
import * as API from "../services/API";

export default class ArticlePage extends Component {
  state = { article: null };

  componentDidMount() {
    const id = this.props.match.params.articleID;
    API.getPeopleWithId(id).then((data) => this.setState({ article: data }));
  }

  handleGoBack = () => {
    this.props.history.push("/articles");
  };

  render() {
    const { article } = this.state;
    return (
      <>
        <h1>Single article page.</h1>
        {article && <Article {...article} onGoBack={this.handleGoBack} />}
      </>
    );
  }
}
