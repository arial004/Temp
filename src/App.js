import React from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components';
import {StatusBar} from 'react-native';

const theme = {
  backgroundColor: '#101010',
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
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
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.backgroundColor}
      />
      <Title>TODO</Title>
      <Button title="ABC"></Button>
    </Container>
  );
};

export default App;
