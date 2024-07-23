import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
let myobj = {
  naam:"raj",
  kaam:"student"
} 

function App() {
  const [count, setCount] = useState(0)
//jaise kai saare cards hai components , to use of passing data from one compjnenet to another is done by props
  return (
    <>
      <h2 className='bg-green-400 text-black p-6 rounded-xl'>tailwind test</h2>
      <Card username= "chai aur code"/>
      
    </>
  )
}

export default App
