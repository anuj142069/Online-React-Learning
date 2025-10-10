import { useState } from 'react'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'

function App() {

  // let foodItems = []

  let [foodItems, setFoodItem] = useState([
    // "Dal",
    // "Chawal",
    // "Sabzi",
    // "Chips",  
    // "Chokha"
  ])

  const onKeyDown = (e)=>{
    if(e.key === 'Enter'){
      let newFoodItem = e.target.value;
      e.target.value = '';
      let newItem = [...foodItems, newFoodItem];
      setFoodItem(newItem);
    }
  }


  // let foodItems = [];
  
  return (
    <>
      <Container>
        <h1 className="text-4xl text-center "><b>Healthy Food</b></h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
    </>
  )
}

export default App
