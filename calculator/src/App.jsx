import { useState } from "react"
import ButtonContainer from "./components/ButtonContainer"
import Display from "./components/Display"

function App() {

  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal("");
    }else if (buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    }else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue)
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
