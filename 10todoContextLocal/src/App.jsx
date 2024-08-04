import { useState,useEffect } from 'react'
import {TodoProvider} from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [Todos, setTodos] = useState([])
  const addTodo = (todo)=>{
    //setTodos(todo), this will erase all previous todos 
    //we will use callback to get previous values and inject new todo infront of em
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
    //in react , when we pass callback fn in setvariable , always prev variable will be stored in it , thats why it works. 
  }
  const updatedTodo=(id,todo)=>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }
  //jab tak server side randering ki baat ni kar rahe tab tak local storage access karsakte isme
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos))
  }, [Todos])
  
  return (
    <TodoProvider value={{Todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {Todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
        </div>
    </div>
    </div>
</TodoProvider>
  )
}

export default App
