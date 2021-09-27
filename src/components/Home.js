import { useContext } from "react";
import { DataContext } from "../providers/DataContext";
import NextLaunch from "./NextLaunch"

function Home() {
    const { nextLaunch } = useContext(DataContext);
    return (
        <div>
            <NextLaunch nextLaunch={nextLaunch} />
        </div>
    )
}

export default Home
