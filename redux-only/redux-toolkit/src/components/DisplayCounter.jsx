import { useSelector } from "react-redux";

const DisplayCounter = () => {

  const { counterVal } = useSelector((store) => store.counter);

  return(
    <>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Counter Current Value {counterVal}</p>
    </>
  )
}

export default DisplayCounter;