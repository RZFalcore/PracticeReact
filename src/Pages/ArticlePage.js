import React, { Component } from "react";

import Article from "../Components/App/Article/Article";
import * as API from "../services/API";
import { getCategoryFromLocationState } from "../helpers/routingHelpers";
export default class ArticlePage extends Component {
  state = { article: null };

  componentDidMount() {
    const { location } = this.props;
    const id = this.props.match.params.articleID;
    const category = getCategoryFromLocationState(location);

    API.getPeopleWithId(id, category).then((data) =>
      this.setState({ article: data })
    );
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }
    history.push("/articles");
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
