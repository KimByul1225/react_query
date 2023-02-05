import React, { useState } from "react";

function App() {
  const [name, setName] = useState("")
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value)
    const {currentTarget: {value} } = event;
    setName(value)
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log("hello", name)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={name} onChange={onChange} type="text" placeholder="Name"/>
        <button>로그인</button>
      </form>
    </div>
  );
}

export default App;