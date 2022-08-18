import "./App.css";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import MainFeed from "./components/MainFeed";

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
    </div>
  );
}

export default App;
