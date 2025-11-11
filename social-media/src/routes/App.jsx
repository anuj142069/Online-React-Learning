import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";
import CreatePost from "../components/CreatePost";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";

function App() {

  // const [selectedTab, setSelectedTab] = useState("Home");

  return(
    <>  
      <Container>
        <PostListProvider>
          <SideBar
          //  selectedTab={selectedTab} setSelectedTab={setSelectedTab}
          ></SideBar>
          <div className="content overflow-x-hidden">
            <Header></Header>
            <Outlet />
            {/* {selectedTab === "Home" ? (<PostList></PostList>) : (<CreatePost></CreatePost>)} */}
            <Footer></Footer>
          </div>
        </PostListProvider>
      </Container>
    </>
  )

}

export default App;
