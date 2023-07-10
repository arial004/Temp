import React from 'react';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
import PropTypes from 'prop-types';




const StyledInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor : `#101010`,
}))`
  width: ${({width}) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: beige;
  font-size: 25px;
  color: black;
`;

const Input = ({placeholder, value, onChangeText, onSubmitEditing}) => {
  const width = Dimensions.get('window').width;

  return <StyledInput width={width} 
                      placeholder={placeholder} 
                      maxLength={30}
                      autoCapitalize="none"
                      autoCorrect={false}
                      returnKeyType="done"
                      keyboardAppearance="dark"
                      value={value}
                      onChangeText={onChangeText}
                      onSubmitEditing={onSubmitEditing}
        />;
};

Input.PropTypes = {
    placeholder : PropTypes.string,
    value : PropTypes.string.isRequired,
    onChangeText : PropTypes.string.isRequired,
    onSubmitEditing : PropTypes.string.isRequired,
}

export default Input;
