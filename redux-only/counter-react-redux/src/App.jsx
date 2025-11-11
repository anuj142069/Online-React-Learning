import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessase from "./components/privacyMessage";

function App() {

  const privacy = useSelector(store => store.privacy);

  return (
    <>
      <div className="text-center">
        <Container>
          <Header></Header>
          {!privacy ? <PrivacyMessase />: <DisplayCounter />}
          <Controls></Controls>
       </Container>
      </div>
    </>
  )
}

export default App;
