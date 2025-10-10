function ErrorMessage({foodItems}){
  return(
    <>
      {foodItems.length===0 ? <h2 className='px-5 py-2'>I am still hungry</h2>: true}
    </>
  )
}

export default ErrorMessage;