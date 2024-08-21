import React from 'react'
import { todoType, todosType } from '../types/todo'
import { useTodoStore } from '../hooks/useTodoStore'

export default function TodoList() {
    const{todos, completeTodo, deleteTodo } = useTodoStore(state=>state)
    console.log(todos)
  return (
    <div className="p-2 w-full">
        {todos.map((todo : todoType) =>(
            <div className='flex items-center gap-4 mb-4 border border-1 border-gray-500 p-2'>
                
                <p className = {`text-lg ${todo.isDone? "text-green-500" : "text-red-500"}`}>{todo.title}</p>
                <button className = "bg-green-300 p-2" onClick={()=>completeTodo(todo.id)}>Done</button>
                <button className = "bg-red-300 p-2" onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </div>
        ) )}
    </div>
  )
}
