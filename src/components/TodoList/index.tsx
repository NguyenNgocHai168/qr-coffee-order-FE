"use client";
import { AppDispatch, RootState } from "@/redux/features/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrderCoffee } from "@/redux/features/coffeeOrder-slice";
import { removeTodo, toggleTodo } from "@/redux/features/todo-slice";

function TodoList() {
    const todoList = useSelector((state: RootState) => state.todoReducer.list);
    const dispatch = useDispatch<AppDispatch>();
    const [todo, setTodo] = React.useState("");

    const handleSubmit = () => {
        dispatch(
            addOrderCoffee({
                id: Date.now(),
                name: todo,
                done: false,
            })
        );
        setTodo("");
    };

    const handleDelete = (id: number) => {
        dispatch(removeTodo(id));
    };

    const handleToggle = (id: number) => {
        dispatch(toggleTodo(id));
    };

    return (
        <div className="w-2/4 m-2">
            <label htmlFor="">Nhập công việc</label>
            <input
                type="text"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
                className="my-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={handleSubmit}
            >
                Add
            </button>
            {todoList.map((todo) => {
                return (
                    <div
                        key={todo.id}
                        className="flex"
                    >
                        {/* <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={() => handleToggle(todo.id)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        /> */}
                        {todo.name}

                        <button onClick={() => handleDelete(todo.id)} className="ml-auto">
                            🗑️
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoList;