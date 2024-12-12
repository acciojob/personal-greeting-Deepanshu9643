
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [Inputvalue, setInputvalue] = useState("")

  const handlechange = (e) => {
    setInputvalue(e.target.value)
  }
  return (
    <div>
      <h1>Enter your name:</h1>
      <input type="text" value={Inputvalue} onChange={handlechange}>
      </input>
    <p>Hello {Inputvalue} </p>
    </div>
  )
}

export default App
