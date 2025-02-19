import { useState } from 'react';

import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5 

  const addValue = () => {
    if (counter < 20) {
       // counter = counter + 1
      setCounter(counter + 1)
    }  
  };

  const removeValue = () => { 
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      
      <h1>Sugam Bohara | Vite + React</h1>
      <h2>Counter Value: {counter} </h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
