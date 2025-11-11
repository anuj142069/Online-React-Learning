import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/to-do-items-stor";
import { useContext } from "react";

const TodoItems = () => {
  
  const { todoItems } = useContext(TodoItemsContext)


  return(
    <>
      <div className="item-container">
        {todoItems.map((item,index)=>(
        <TodoItem 
        key={index} 
        todoName={item.name} 
        todoDate={item.dueDate}
        ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;