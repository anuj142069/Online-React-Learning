import TodoHeading from "./components/TodoHeading"
import TodoInput from "./components/TodoInput"
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage"
import  TodoItemsContextProvider  from "./store/to-do-items-stor"

function App() {

  return (
    <>
      <TodoItemsContextProvider>
        <div className="container">
          <TodoHeading></TodoHeading>
          <div className="row">
            <TodoInput></TodoInput>
            <WelcomeMessage></WelcomeMessage>
            <TodoItems></TodoItems>
          </div>
        </div>
      </TodoItemsContextProvider>
    </>
  )
}

export default App
