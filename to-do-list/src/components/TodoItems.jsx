import TodoItem from "./TodoItem";

const TodoItems = ({todoItems}) => {
  return(
    <>
      <div className="item-container">
        {todoItems.map((item,index)=>(
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate}></TodoItem>
        ))}
        {/* <TodoItem todoName="Buy Milk" todoDate="14/10/2025"></TodoItem>
        <TodoItem todoName="Buy Milk" todoDate="14/10/2025"></TodoItem>
        <TodoItem todoName="Buy Milk" todoDate="14/10/2025"></TodoItem>
        <TodoItem todoName="Buy Milk" todoDate="14/10/2025"></TodoItem> */}
      </div>
    </>
  );
};

export default TodoItems;