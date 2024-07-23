import { useState } from 'react'
import { InputBox } from './components'
import {useCurrencyinfo} from './hooks/useCurrencyinfo'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [from , setfrom] = useState("USD")
  const [to , setTo] = useState("INR")
  const [convertedAmount , setConvertedAmount] = useState(0);

  return (
   <>
   <h1 className=' text-orange-500'>hello custom hooks</h1>
   </>
  )
}

export default App
