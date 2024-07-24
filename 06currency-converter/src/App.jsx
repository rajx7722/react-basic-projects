import { useState } from 'react'
import { InputBox } from './components'
import {useCurrencyinfo} from './hooks/useCurrencyinfo'
import './App.css'


function App() {
  const [amount, setAmount] = useState(0)
  const [from , setfrom] = useState("USD")
  const [to , setTo] = useState("INR")
  const [convertedAmount , setConvertedAmount] = useState(0);

  const currencyinfo = useCurrencyinfo(from)

  const options = Object.keys(currencyinfo)
  
  const swap = () => {
    setfrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyinfo[to])
  }

  return (
   <>
   <h1 className=' text-orange-500'>hello custom hooks</h1>
   </>
  )
}

export default App
