const Item = ({foodItem, bought, handleBuyButton}) =>{

  // const handleBuyButtonClicked = (e)=>{
  //   console.log(e);
    
  //   console.log(`${foodItem} being bought`)
  // }
  

  return (
    <>
        <li className={`p-2 flex justify-between items-center border-b-1 ${bought && "bg-blue-600 text-white"}`}>
          <span className="">{foodItem}</span>
          <button className="border-1 px-4 rounded py-2 bg-blue-500 text-white"
          onClick={handleBuyButton}
          >Buy</button>
        </li>
          
    </>
  )
};

export default Item;