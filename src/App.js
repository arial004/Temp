import React from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components';


const Container = styled.View`
  flex : 1;
  background-color: darkgray;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color : bisque;
  align-self: flex-start;
  margin: 0px 20px;
`

const App = () => {
  return (
    <Container>
      <Title>아수라발발타</Title>
      <Button title="ABC"></Button>
    </Container>
  );
};

export default App;
