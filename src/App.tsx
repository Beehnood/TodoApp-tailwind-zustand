import TodoForm from "./components/todoForm"
import TodoList from "./components/todoList"


function App() {
  

  return (
    <div className="max-w-lg flex flex-col mx-auto">
      <h1 className="text-3xl font-bold text-blue-500 text-center my-4">
     Todo APP 
    </h1>
    <TodoForm/>
    <TodoList/>
    </div>
  )
}

export default App
