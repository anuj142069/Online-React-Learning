const ErrorMessage = ({items}) =>{
  

  // if(foodItems.length === 0){
  //   return <h3>I am still hungry</h3>
  // }
  

  // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;
  return(
    <>
      {/* {emptyMessage} */}
      {items.length === 0 && <h3 className="px-5 py-2">I am still hungry</h3>}
      {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null} */}
    </>
  );
}

export default ErrorMessage;