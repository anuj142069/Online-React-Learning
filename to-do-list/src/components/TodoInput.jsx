function TodoInput(){
  return(
    <>
      <div className="input grid grid-cols-3 w-1/2 m-auto">
        <input type="text" className="border-1 border-gray-500 p-2 m-2 rounded-sm" placeholder="Enter Todo Here" />
        <input type="date" className="border-1 border-gray-500 p-2 m-2 rounded-sm"/>
        <button className="rounded-sm bg-green-600 border-green-600 p-2 m-2 text-white">Add</button>
      </div>
    </>
  )
}

export default TodoInput;