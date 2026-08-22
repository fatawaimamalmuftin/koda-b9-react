import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAsync,
  toggleTodoAsync,
  deleteTodoAsync
} from "../Redux/slice/todos.js";

export default function TodoList() {

  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoState.todoList);


  const handleAddTodo = () => {

    if(todo.trim() === ""){

      return

    }

    const newTodo = {

      id: Date.now(),

      text: todo,

      completed: false

    }

    dispatch(addTodoAsync(newTodo));

    setTodo("");

  }


  return (
    <main className="min-h-screen bg-gray-400 flex items-center justify-center">

      <div className="w-150 bg-white px-12 py-10 shadow-lg">

        <div className="flex items-center justify-between mb-8">

          <h1 className="text-5xl font-semibold">
            Todo List
          </h1>
          
        </div>


        <div className="flex gap-3 mb-8">

          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add todo..."
            className="flex-1 border border-gray-300 px-4 py-3 outline-none"
          />

          <button
            type="button"
            onClick={handleAddTodo}
            className="bg-blue-600 text-white px-5 cursor-pointer"
          >
            Add
          </button>

        </div>


        <div className="flex flex-col">

          {
            todoList.map((todo) => (

              <div
                key={todo.id}
                className="flex items-center gap-5 py-5 border-b border-gray-200"
              >

                <button
                  type="button"
                  onClick={() => dispatch(toggleTodoAsync(todo.id))}
                  className={`w-6 h-6 rounded-full border-4 cursor-pointer ${
                    todo.completed
                      ? "bg-blue-600 border-blue-600"
                      : "border-blue-600"
                  }`}
                >
                </button>


                <p
                  className={`text-xl flex-1 ${
                    todo.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-600"
                  }`}
                >
                  {todo.text}
                </p>


                <button
                  type="button"
                  onClick={() => dispatch(deleteTodoAsync(todo.id))}
                  className="text-gray-300 hover:text-red-500 cursor-pointer"
                >
                  🗑️
                </button>

              </div>

            ))

          }

        </div>

      </div>

    </main>
  )
}