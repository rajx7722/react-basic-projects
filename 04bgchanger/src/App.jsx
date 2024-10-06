import { useState } from 'react'

function App() {
  const [colour, setColour]= useState("olive")
  return (
   <div className="w-full h-screen duration-500"
    style={{backgroundColor: colour}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-1 py-2 rounded-3xl">
            <button onClick={() => setColour("red")}
            className="outline-none px-4 py-1 rounded-full text-BLACK shadow-lg"
              style={{backgroundColor : "red"}}
            >RED</button>
            <button onClick={() => setColour("BLUE")} className="outline-none px-4 py-1 rounded-full text-BLACK shadow-lg"
              style={{backgroundColor : "BLUE"}}
            >BLUE</button>
            <button onClick={() => setColour("GREEN")} className="outline-none px-4 py-1 rounded-full text-BLACK shadow-lg"
              style={{backgroundColor : "GREEN"}}
            >GREEN</button>
            <button onClick={() => setColour("OLIVE")} className="outline-none px-4 py-1 rounded-full text-BLACK shadow-lg"
              style={{backgroundColor : "OLIVE"}}
            >OLIVE</button>
            <button onClick={() => setColour("YELLOW")} className="outline-none px-4 py-1 rounded-full text-BLACK shadow-lg"
              style={{backgroundColor : "YELLOW"}}
            >YELLOW</button>
            <button onClick={() => setColour("PINK")} className="outline-none px-4 py-1 rounded-full text-BLACK shadow-lg"
              style={{backgroundColor : "PINK"}}
            >PINK</button>
            <button onClick={() => setColour("BLACK")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor : "BLACK"}}
            >BLACK</button>
            <button onClick={() => setColour("ORANGE")} className="outline-none px-4 py-1 rounded-full text-BLACK shadow-lg"
              style={{backgroundColor : "ORANGE"}}
            >ORANGE</button>
            <button onClick={() => setColour("VIOLET")} className="outline-none px-4 py-1 rounded-full text-BLACK shadow-lg"
              style={{backgroundColor : "VIOLET"}}
            >VIOLET</button>
            

           </div>
           

      </div>
    </div>
  )
}

export default App
