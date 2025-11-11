import { useContext, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/to-do-items-stor";


function TodoInput(){
  const {addNewItem} = useContext(TodoItemsContext)
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = ""
    dueDateElement.current.value = ""
    addNewItem(todoName, dueDate)
  }
    
  return(
    <>
      <form className="input xl:w-6/12 lg:w-7/12 md:w-9/12 sm:w-full m-auto" 
      onSubmit={handleAddButtonClicked}>
        <input 
        type="text" 
        ref={todoNameElement}
        className="border-1 border-gray-500 p-2 m-2 rounded-sm w-5/12" 
        placeholder="Enter Todo Here" 
        />
        
        <input 
        type="date" 
        ref={dueDateElement}
        className="border-1 border-gray-500 p-2 m-2 rounded-sm w-4/12"
        />
        <button 
        type="submit"
        className="rounded-sm bg-green-600 border-green-600 px-8 py-2 m-2 text-2xl text-white w-2/12"
        ><IoIosAddCircle /></button>
      </form>
    </>
  )
}

export default TodoInput;