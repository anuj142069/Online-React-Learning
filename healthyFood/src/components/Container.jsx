function Container({children}){

  return (
    <>
      <div className="border-1 lg:w-3/12 md:w-6/12 sm:w-8/12 m-auto rounded">{children}</div>
    </>
  )
}

export default Container;