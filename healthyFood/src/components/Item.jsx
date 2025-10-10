function Item({item}){

  

  return(
    <>
      <li className='border-b-1 px-5 py-2 flex justify-between items-center'>{item}
        <button className='border-1 bg-blue-400 text-white px-4 py-2 rounded'>Buy</button>
      </li>
    </>
  )
}

export default Item;