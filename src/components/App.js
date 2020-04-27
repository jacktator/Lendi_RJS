import React from 'react';
import IO from './IO';
import List from './List';
import styled from 'styled-components';

const AppContainer = styled.main`
  
  display: flex;
  flex-direction: column;
  
  
`;

function App() {
  return (
    <AppContainer>
      <IO />
      <List />
    </AppContainer>
  );
}

export default App;
