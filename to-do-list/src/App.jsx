import TodoHeading from "./components/TodoHeading"
import TodoInput from "./components/TodoInput"
import TodoItems from "./components/TodoItems"

function App() {

  return (
    <>
      <div className="container">
        <TodoHeading></TodoHeading>
        <div className="row ">
          <TodoInput></TodoInput>
          <TodoItems></TodoItems>
        </div>
      </div>
    </>
  )
}

export default App
