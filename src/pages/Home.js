import Header from "../components/header";
import RightSidebar from "../components/rightSidebar";
import LeftSidebar from "../components/leftSidebar";
import MainFeed from "../components/mainFeed";


export default function Home() {
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
    )
}
