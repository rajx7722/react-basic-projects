import {createContext,useContext} from "react"

export const TodoContext = createContext({
    toDos:[
        {
            id:1,
            Todo: "Todo msg",
            completed :"false", 
        }
    ],//ye Todos is just a variable containing an array of objects , no need to be scared
    addTodo: (Todo)=>{},
    updatedTodo:(id,Todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
} 
export const TodoProvider = TodoContext.Provider    