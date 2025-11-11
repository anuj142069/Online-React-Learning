import ClockHeading from "./components/ClockHeading"
import ClockDescription from "./components/ClockDescription"
import CurrentTime from "./components/CurrentTime"
function App() {
  
  return (
    <>
      <div className="container text-center">
        <div className="bharat-clock">
          <ClockHeading></ClockHeading>
          <ClockDescription></ClockDescription>
          <CurrentTime></CurrentTime>
        </div>
      </div>
    </>
  )
}

export default App
