function Display({displayValue}){
  return(
    <>
      <div className="display">
        <input 
        type="text" 
        className="border-1 p-2 font-semibold text-2xl w-60 h-10 rounded" 
        value={displayValue} 
        readOnly />
      </div>
    </>
  )
}

export default Display;