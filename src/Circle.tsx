import React, { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: ${props => props.bgColor};
    border: 1px solid ${props => props.borderColor};

`

interface CircleProps {
    bgColor : string;
    borderColor?: string;
    text?: string;

}

function Circle({bgColor, borderColor, text="default text"}: CircleProps) {
    const [counter, setCounter] = useState<number|string>(1);
    setCounter("hello")
    setCounter(2)
    setCounter(true)

    return (
        <Container 
            bgColor={bgColor}
            borderColor={borderColor ?? bgColor }
        >
            {text}
        </Container>
    );
}

export default Circle;
