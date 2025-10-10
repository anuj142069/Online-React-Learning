const Container = (props) =>{

  return(
    <>
      <div className="border lg:w-3/12 sm:w-6/12 m-auto mt-10 rounded">{props.children}</div>
    </>
  )

}

export default Container;