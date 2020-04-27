import React from 'react';
import styled from 'styled-components';

// TODO: There is a Semantic HTML issue in this file, please correct it.
const ArticleContainer = styled.article`
  cursor: pointer;
`;


function Article(props) {
  const { title, body, isSelected } = props;

  function handleClick() {
    const { id, onClick } = props;

    onClick(id);
  }

  return (
    <ArticleContainer onClick={handleClick}>
      <h2>{title}</h2>
      {
        isSelected &&
        <p>{body}</p>
      }
    </ArticleContainer>
  );
}

export default Article;
