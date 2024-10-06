import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
//jaise kai saare cards hai components , to use of passing data from one compjnenet to another is done by props
  return (
    <>
      <h2 className='bg-green-400 text-black p-6 rounded-xl'>tailwind test</h2>
      <Card username= "rajx" btnText="click Me"/>
      <Card username="adi"/>
    </>
  )
}

export default App
