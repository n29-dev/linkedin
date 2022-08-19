import "./App.css";
import Header from "./components/header";
import RightSidebar from "./components/rightSidebar";
import LeftSidebar from "./components/leftSidebar";
import MainFeed from "./components/mainFeed";
import Signup from "./components/signup";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <main className="content__area">
          <LeftSidebar />
          <MainFeed />
          <RightSidebar />
        </main>
      </div>
      {/* <Signup/> */}
    </div>
  );
}

export default App;
