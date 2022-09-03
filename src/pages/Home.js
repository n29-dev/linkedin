import Header from "../components/header";
import RightSidebar from "../components/rightSidebar";
import LeftSidebar from "../components/leftSidebar";
import MainFeed from "../components/mainFeed";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Loading from "../components/misc/Loading";


export default function Home() {

    const { getUserAdditionalData, additionalInfo } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!additionalInfo)
            getUserAdditionalData(
                // sucees
                (data) => {
                    setLoading(false);
                },
                // error
                (error) => {
                    console.log(error)
                }
            )
    }, [])


    return (
        <>
            {loading ? <Loading /> : (
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
            )}
        </>
    )
}
