import React, { useState } from 'react'
import { useTodoStore } from '../hooks/useTodoStore'
import { uid } from "react-uid";
import { todoType } from '../types/todo';

export default function TodoForm() {

    const [title, setTitle] = useState<string>("")
    const {addTodo , todos} = useTodoStore(state => state)

    const handleSubmit =(e)=>{
        e.preventDefault()
        const newTodo:todoType = {
          title: title,
          id: uid(`${todos.length}`),
          isDone: false
        }
        addTodo(newTodo)
        setTitle("")
    }

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-center py-4'>
        <input  name="title" type='text' className="form-input rounded-xl" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <button type="submit" className="bg-green-500 text-white ml-2 px-2 py-2 rounded-xl"  >Add</button>
        
    </form>
    

  )
}
