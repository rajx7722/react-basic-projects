import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  //let counter = 5;
  const addvalue = () =>{
    counter = counter+1;
    setCounter(counter)
  }
  const remvalue = () =>{
    counter = counter-1;
    if(counter<0){
      counter=0;
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <h1>counter value: {counter}</h1>
      <button onClick={addvalue}>add value</button>
      <br />
      <button onClick={remvalue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
