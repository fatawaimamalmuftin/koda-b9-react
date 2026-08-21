import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: "todolist",
    initialState,
    reducers: {
        addTodo: (prevState, {payload})=>{
            return{
                ...prevState,
                todoList: [...prevState.todoList,payload]
            }
        }
    }
})

export const {
    addTodo
} = todoSlice.actions

export default todoSlice.reducer