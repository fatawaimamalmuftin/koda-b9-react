import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    todoList: []

}

export const addTodoAsync = (todo) => {

    return (dispatch) => {

        setTimeout(()=>{

            dispatch(addTodo(todo))

        },1000)

    }

}

export const toggleTodoAsync = (id) => {

    return (dispatch) => {

        setTimeout(()=>{

            dispatch(toggleTodo(id))

        },1000)

    }

}

export const deleteTodoAsync = (id) => {

    return (dispatch) => {

        setTimeout(()=>{

            dispatch(deleteTodo(id))

        },1000)

    }

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

        },

        toggleTodo: (prevState, {payload})=>{

            return{

                ...prevState,

                todoList: prevState.todoList.map((todo)=>{

                    if(todo.id === payload){

                        return{

                            ...todo,

                            completed: !todo.completed

                        }

                    }

                    return todo

                })

            }

        },

        deleteTodo: (prevState, {payload})=>{

            return{

                ...prevState,

                todoList: prevState.todoList.filter((todo)=>todo.id !== payload)

            }

        }

    }

})

export const {

    addTodo,
    toggleTodo,
    deleteTodo

} = todoSlice.actions



export default todoSlice.reducer