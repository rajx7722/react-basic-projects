import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos: [{
        id:1,
        text:"hello world",
        completed:false
    }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(),
                text: action.payload //paylload is also an object in itself , so we can use payload.ttext
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload) //will filter out the updated state without the id that was removed
    
        }
    }
})
 export const {addTodo,removeTodo} =todoSlice.actions
 export default todoSlice.reducer   