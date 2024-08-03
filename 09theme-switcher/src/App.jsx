import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [ThemeMode,setThemeMode] = useState("light")
  //we use value in themeprovider here to tell what values it can access , this is the more
  //used ,method in the industry , we can use the values of it exactly same in useState variables , thats the neat part
  //exact same name defined will make the themeprovider ones have the functionality

  const lightTheme =()=>{
    setThemeMode("light")
  }
  const darkTheme =()=>{
    setThemeMode("dark")
  }
  //now change to hojaeyga themeprovider wale but actual theme change ab to classic js se hi hogi 
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(ThemeMode)
  },[ThemeMode])

  return (
   <ThemeProvider value={{ThemeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
    </div>
   </ThemeProvider>
  )
}

export default App
