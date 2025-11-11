import { useContext } from "react";
import { TodoItemsContext } from "../store/to-do-items-stor";

const WelcomeMessage = ()=>{

  const {todoItems} = useContext(TodoItemsContext);

  return(
    
     todoItems.length === 0 && <p className="text-center text-2xl font-bold">Enjoy Your Day</p>
    
  )
}

export default WelcomeMessage;