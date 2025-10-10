import { useState } from "react";
import Item from "./Item";

const FoodItems = ({items}) =>{

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, e)=>{
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  }
  
  return(
    <>
      <ul className="w-full border rounded bg-yellow-50 my-5 mx-5">
        {items.map((item) => (
          <Item key={item}
          foodItem={item} 
          bought={activeItems.includes(item)}
          handleBuyButton={(e) => onBuyButton(item, e)}
          ></Item>
        )
        )}
      </ul>
    </>
  );
}

export default FoodItems;