function FoodInput ({handleKeyDown}){
  return(
    <>
      <input type="text" onKeyDown={handleKeyDown} placeholder='Enter Healthy Food here' className='p-2 m-4 border-1 rounded w-11/12' />
    </>
  )
}

export default FoodInput;