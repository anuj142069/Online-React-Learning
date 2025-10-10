import Item from "./Item";

function FoodItems({foodItems}){
  return(
    <>
      <ul className='border-1 rounded mx-5 mb-4'>
        {foodItems.map((item)=>(
          <Item key={item} item={item}></Item>
        ))}
      </ul>
    </>
  )
}

export default FoodItems;