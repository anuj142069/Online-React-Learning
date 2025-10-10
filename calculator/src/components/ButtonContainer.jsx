function ButtonContainer({onButtonClick}){
  
  const buttonNames = [
    '1', 
    '2', 
    '3', 
    '+', 
    '4', 
    '5', 
    '6', 
    '-', 
    '7', 
    '8', 
    '9', 
    '/', 
    'C', 
    '0', 
    '=', 
    '*'
  ];

  
  
  return(
    <>
      <div className="buttonContainer">
        <div className="row text-center">
          {buttonNames.map((buttonName , index) => (
            <button className="num border-1 w-13 h-13 m-1 p-3 bg-gray-100 rounded"
            onClick={() => onButtonClick(buttonName)}
            key={index}
            >{buttonName}</button>
          ))}
        </div>  
      </div>
    </>
  )
}

export default ButtonContainer;