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
const Btn = styled.button`
  color: #fff;
  background-color: orange;
  border: 0;
  border-radius: 15px;
`


const Text = styled.span`
  color: #fff;
`

const Input = styled.input.attrs({required: true, minLength: 10 })`
  background-color: red;
`

function App() {
  return (
    <>
      <Father as="header">
        <Box bgColor="yellow">
          <Text>123</Text>
        </Box>
        <Circle bgColor="green">
          <Text>123</Text>
        </Circle>
        <Btn>Login</Btn>
        <Btn as="a">LinkLogin</Btn>
      </Father>
      <Input/>
      <Input/>
      <Input/>
    </>
    
  );
}

export default App;
