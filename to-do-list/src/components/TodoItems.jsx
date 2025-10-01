function TodoItems(){
  return(
    <>
      <div className="items grid grid-cols-3 w-1/2 m-auto">
        <p className="p-2 m-2">Buy Milk</p>
        <p className="p-2 m-2">14/10/2025</p>
        <button className="rounded-sm bg-red-600 border-red-600 p-2 m-2 text-white">Delete</button>
      </div>
    </>
  )
}

export default TodoItems;