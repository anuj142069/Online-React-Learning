const FoodInput = ({handleKeyDown})=>{

  // const handleOnChange = (e)=>{
  //   console.log(e.target.value) 
  // }

  return(
    <>
      <input type="text" placeholder="Enter Food Item here" className="border-1 p-1.5 w-full mx-5 mt-4 rounded"
      onKeyDown={handleKeyDown}
      />
    </>
  )
}

export default FoodInput;