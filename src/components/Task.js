import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { images } from "../images";



const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: 18px;
    padding : 5px;
    margin : 3px 0px;
`;

const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
    color : bisque;
`

const Task = ({text}) => {
    return(
        <Container>
            <IconButton type={images.uncompleted}/>
            <Contents/>
            <IconButton type={images.update}/>
            <IconButton type={images.delete}/>
        </Container>
    );
};

Task.propTypes={
    text : PropTypes.string.isRequired,
}

export default Task;