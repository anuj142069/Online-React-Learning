import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { TodoItemsContext } from "../store/to-do-items-stor";


function TodoItem({todoName, todoDate}){

  const {deleteItem} = useContext(TodoItemsContext)

  return(
    <>
      <div className="items flex xl:w-6/12 lg:w-7/12 md:w-9/12 sm:w-full m-auto">
        <p className="p-2 m-2 w-5/12">{todoName}</p>
        <p className="p-2 m-2 w-4/12">{todoDate}</p>
        <button className="rounded-sm bg-red-600 border-red-600 p-2 m-2 text-white w-2/12" 
        onClick={() => deleteItem(todoName)}><FaTrashAlt /></button>
      </div>
    </>
  );
};  

export default TodoItem;