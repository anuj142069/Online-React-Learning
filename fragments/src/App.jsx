import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

  // let foodItems = ["Dal", "Gobhi", "Green Vegetable", "Roti", "Salad", "Milk"];
  // let foodItems = [];


  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState(
    [ 
      // "Salad", 
      // "Gobhi", 
      // "Sabzi", 
      // "Roti",
    ]
  )
  // console.log(`Current value of textState: ${textToShow}`);
  

  // let textToShow = "Food item entered by user";

  const onKeyDown = (e)=>{
    if(e.key === 'Enter'){
      let newFoodItem = e.target.value;
      e.target.value = '';
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is " + newFoodItem)
    }
  };
 

  return (
    <>
      <Container>
        <h1 className="text-4xl text-red-900 font-bold border-b-1 p-2 text-center">Healthy Food</h1>
        <div className="flex flex-wrap">
          <FoodInput handleKeyDown={onKeyDown}></FoodInput>
          <ErrorMessage items={foodItems}></ErrorMessage>
          <FoodItems items={foodItems}></FoodItems>
        </div>
      </Container>
    </>
  )
}

export default App
