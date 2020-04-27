import React, { Component } from 'react';
import Article from './Article';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// TODO: Refactor to Function Component & Hooks.
class List extends Component {
  state = { articles: null, loading: false, selected: -1 };

  componentDidMount() {
    this.setState({ loading: true });

    // This setTimeout exists to show the loading indicator, please do
    // not remove it as part of this test.
    setTimeout(() => {
      // TODO: Use async/await.
      fetch(API_URL)
        .then(res => res.json())
        .then(this.hydrate);
    }, 2000);
  }

  hydrate = data => this.setState({ articles: data, loading: false });

  handleClick = id => this.setState({ selected: id });

  render() {
    const { articles, loading, selected } = this.state;

    if (loading === true) {
      return <p>Loading...</p>;
    } else if (articles === null) {
      return null;
    }
    // TODO: Add a case for handling an empty articles list.

    return (
      <main>
        <h1>Articles list:</h1>
        {/* TODO: Limit to the first 10 and order the articles alphabetically. */}
        {articles.map(article => (
          <Article
            key={article.id}
            {...article}
            isSelected={article.id === selected}
            onClick={this.handleClick}
          />
        ))}
      </main>
    );
  }
}

export default List;
