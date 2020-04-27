import React, { useState, useEffect } from 'react';
import Article from './Article';
import styled from 'styled-components';

const ListContainer = styled.main`
  height: 100%;
  
  /* Solution using position: Fixed */
  //margin-top: 150px;
  
  //overflow-y: auto;
  //overflow-x: visible;
`;

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const SIZE = 10;

const List = () => {

  const [state, setState] = useState({ articles: null, loading: false, selected: -1 });

  useEffect(() => {
    setState({ loading: true });

    // This setTimeout exists to show the loading indicator, please do
    // not remove it as part of this test.
    // TODO: Use async/await.
    setTimeout(onTimeOut, 2000);
  }, []);

  const onTimeOut = async () => {
    const response = await fetch(API_URL);
    const json = await response.json();
    hydrate(json)
  };

  const hydrate = data => setState({ articles: data, loading: false });

  const handleClick = id => setState({ selected: id });

  const { articles, loading, selected } = state;

  if (loading === true) {
    return <p>Loading...</p>;
  } else if (articles === null) {
    return null;
  }
  // TODO: Add a case for handling an empty articles list.

  return (
    <ListContainer>
      <h1>Articles list:</h1>
      {/* TODO: Limit to the first 10 and order the articles alphabetically. */}
      {articles
        .slice(0, SIZE)
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(article => (
            <Article
              key={article.id}
              {...article}
              isSelected={article.id === selected}
              onClick={handleClick}
            />
          )
        )}
    </ListContainer>
  );
};

export default List;
