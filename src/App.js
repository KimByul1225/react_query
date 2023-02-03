import styled from "styled-components";

const Father = styled.div`
  display: flex;

`
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`
const Circle = styled(Box)`
  border-radius: 50px;
`


const Text = styled.span`
  color: #fff;
`

function App() {
  return (
    <Father>
      <Box bgColor="yellow">
        <Text>123</Text>
      </Box>
      <Circle bgColor="green">
        <Text>123</Text>
      </Circle>
    </Father>
  );
}

export default App;
