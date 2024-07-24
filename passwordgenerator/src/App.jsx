import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed ,setCharacterAllowed ] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) str+="0123456789";
    if(characterAllowed) str+="!~@#$%^&*()--+={}[]:/?><,."
             
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass+= str.charAt(char);
    }
    setPassword(pass)
    
  },[length,numberAllowed,characterAllowed,setPassword] )
  
  const copypasswordtoclipboard = useCallback(()=>{window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
  }, [password])
  
  //copying to clipboard wala function 
  useEffect(()=>{passwordGenerator()} , [length,characterAllowed, numberAllowed, passwordGenerator])
//running the generator function 
//use effect runs once the page is refreshed or if dependencies change
  return (
    <div className='w-full max-w-md mx-auto text-white shadow-xl px-4 py-2 my-8 bg-slate-400 rounded-xl'>
      <h1 className='text-center'>PASSWORD GENERATOR</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input 
        type="text" value ={password}
        className='outline-none w-full py-1 px-3 text-black '
         placeholder = "password"
         readOnly
         ref={passwordRef}
         />

        <button onClick={copypasswordtoclipboard}
        className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
          max={50}
          min={6}
          value={length}
          className='cursor-pointer' 
          onChange={(e)=>{setLength(e.target.value)}}       
        />
        <label >length:{length}</label>
      </div>
      <div className='flex items-center'>
        <input type="checkbox"
         defaultChecked= {numberAllowed}
         id="numberinput"
         onChange={()=> {setNumberAllowed((prev)=>!prev); }}/>
         <label className='mx-1 ' htmlFor="numberInput">numbers</label>
      </div>
      <div className='flex items-center mx-1'>
        <input type="checkbox" 
        defaultChecked={characterAllowed}
        id='charinput'
        onChange={()=> {setCharacterAllowed((prev)=>!prev)}}/>
        <label className='mx-1 h-fit' htmlFor="charinput">characters</label>

      </div>

    </div> 
</div>

  )
}

export default App
