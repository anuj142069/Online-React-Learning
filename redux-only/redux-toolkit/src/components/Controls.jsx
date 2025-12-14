import { useRef } from "react";
import { useDispatch } from "react-redux";
import {counterActions} from "../store/counter";
import {privacyActions} from "../store/privacy";

const Controls = () => {

  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    
    dispatch(counterActions.increment());
  }
  const handleDecrement = () => {

    dispatch(counterActions.decrement());
  }
  const handleAdd = () => {
    dispatch(counterActions.add(
      inputElement.current.value,
    ))
    inputElement.current.value = ""
  };
  const handleSubtract = () => {
    dispatch(counterActions.subtract(
      inputElement.current.value,
    ))
    inputElement.current.value = ""
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
    // console.log("privacy toggle");
    
  }

  return (
    <>
      <div className="mt-5 flex items-center justify-center gap-x-6">
        <button className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={handleIncrement}>+1</button>

        <button className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={handleDecrement}>- 1</button>
        
        <button className="rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={handlePrivacyToggle}>Privacy Toggle</button>
      </div>
      <div className="mt-5 flex items-center justify-center gap-x-6">
        <input 
        type="text"
        placeholder="Enter number"
        className="border rounded-sm p-2 w-29"
        ref={inputElement}
        />

        <button className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={handleAdd}>Add</button>
        
        <button className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={handleSubtract}>Substract</button>
      </div>
    </>
  )
}

export default Controls;