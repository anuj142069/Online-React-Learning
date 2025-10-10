import TodoHeading from "./components/TodoHeading"
import TodoInput from "./components/TodoInput"
import TodoItems from "./components/TodoItems"

function App() {

  const todoItemsList = [
    {
    name: 'Buy Milk',
    dueDate: '8/10/2025'
  },
    {
    name: 'Go to College',
    dueDate: '8/10/2025'
  },
    {
    name: 'Go to College',
    dueDate: '8/10/2025'
  },
]

  return (
    <>
      <div className="container">
        <TodoHeading></TodoHeading>
        <div className="row">
          <TodoInput></TodoInput>
          <TodoItems todoItems={todoItemsList}></TodoItems>
        </div>
      </div>
    </>
  )
}

export default App
