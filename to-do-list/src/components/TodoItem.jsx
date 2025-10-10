function TodoItem({todoName, todoDate}){

  return(
    <>
      <div className="items grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-4 lg:w-1/2 md:w-full sm:w-full m-auto">
        <p className="p-2 m-2">{todoName}</p>
        <p className="p-2 m-2">{todoDate}</p>
        <button className="rounded-sm bg-red-600 border-red-600 p-2 m-2 text-white">Delete</button>
      </div>
    </>
  );
};  

export default TodoItem;