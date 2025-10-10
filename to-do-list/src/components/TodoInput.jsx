function TodoInput(){
  return(
    <>
      <div className="input grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-4 lg:w-1/2 md:w-full sm:w-full m-auto">
        <input type="text" className="border-1 border-gray-500 p-2 m-2 rounded-sm" placeholder="Enter Todo Here" />
        <input type="date" className="border-1 border-gray-500 p-2 m-2 rounded-sm"/>
        <button className="rounded-sm bg-green-600 border-green-600 p-2 m-2 text-white">Add</button>
      </div>
    </>
  )
}

export default TodoInput;