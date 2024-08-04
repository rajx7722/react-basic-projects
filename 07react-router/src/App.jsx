import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Footer />
    <Home />
    
    </>
  )
}

export default App
