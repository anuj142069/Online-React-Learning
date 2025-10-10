import { useState } from "react"
import ButtonContainer from "./components/ButtonContainer"
import Display from "./components/Display"

function App() {

  const [calVal, seCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      seCalVal("");
    }else if (buttonText === '='){
      const result = eval(calVal);
      seCalVal(result);
    }else{
      const newDisplayValue = calVal + buttonText;
      seCalVal(newDisplayValue)
    }
  }
  

  return (
    <>
      <div className="container">
        <div className="row m-auto border-1 w-65 p-2 rounded">
          <Display displayValue={calVal}></Display>
          <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer> 
        </div>
      </div>
    </>
  )
}

export default App
