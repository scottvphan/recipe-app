import { useState, useEffect } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import jsonData from './data.json';

function App() {
    const [data, setData] = useState<any>("");
    const [dataLoaded, setDataLoaded] = useState(false);
    // useEffect(() => {
    //     fetch(`./data.json`)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setData(Object.values(data));
    //             setDataLoaded(true);
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             setData([{}]);
    //             console.error("Fetch error:", error);
    //         });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    useEffect(() => {
      setData(jsonData)
      setDataLoaded(true)
    },[])

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        )
    );
    return (
        <>
            {dataLoaded ? (
                <RouterProvider router={router} />
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
}

export default App;
