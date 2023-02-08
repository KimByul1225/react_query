import React from 'react';
import styled from 'styled-components';


function Price() {
    return (
        <>
            <BoxWrap>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </BoxWrap>
        </>
    );
}

export default Price;


const BoxWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Box = styled.div`
    width: 48%;
    height: 150px;
    border: 2px solid #000;
    border-radius: 10px;
    margin-bottom: 20px;
`