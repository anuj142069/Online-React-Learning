import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {

  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    
    dispatch({type: "INCREMENT"})
  }
  const handleDecrement = () => {

    dispatch({type: "DECREMENT"})
  }
  const handleAdd = () => {

    inputElement.current.value
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
    }});
    inputElement.current.value = ""
  };
  const handleSubtract = () => {

    inputElement.current.value
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
    }});
    inputElement.current.value = ""
  };

  const handlePrivacyToggle = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    })
  }

  return (
    <>
      <div className="mt-5 flex items-center justify-center gap-x-6">
        <a href="#" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={handleIncrement}>+1</a>

        <a href="#" className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={handleDecrement}>- 1</a>
        
        <a href="#" className="rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={handlePrivacyToggle}>Privacy Toggle</a>
      </div>
      <div className="mt-5 flex items-center justify-center gap-x-6">
        <input 
        type="text"
        placeholder="Enter number"
        className="border rounded-sm p-2 w-29"
        ref={inputElement}
        />

        <a href="#" className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={handleAdd}>Add</a>
        
        <a href="#" className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={handleSubtract}>Substract</a>
      </div>
    </>
  )
}

export default Controls;