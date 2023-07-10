import React, {useState} from 'react';
import {View, Text, Button, Dimensions} from 'react-native';
import styled from 'styled-components';
import {StatusBar} from 'react-native';
import Input from './components/Input';
import {images} from './images';
import IconButton from './components/IconButton';
import Task from './components/Task';



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
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({width}) => width - 40}px;
`

const App = () => {
  const [newTask, setNewTask] = useState('');
  const width = Dimensions.get('window').width;

  const _addTask = () => {
    alert(`Add : ${newTask}`);
    setNewTask('');
  };

  const _handleTextChange = text => {
    setNewTask(text);
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.backgroundColor}
      />
      <Title>TODO</Title>
      <Input placeholder="Add Task"
             value={newTask}
             onChangeText={_handleTextChange}
             onSubmitEditing={_addTask}
      />
      <List width={width}>
        <Task text="snklsfn"/>
      </List>
    </Container>
  );
};

export default App;
