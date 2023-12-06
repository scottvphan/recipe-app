import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";

function App() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
      console.log(data)
    } catch (error) {
      console.log(data)
      console.error("Error fetching data:", error);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Layout data={data} />}>   
        <Route path="/" element={<HomePage />} />
      </Route>
    )
  );
  return (
    <>{data ? <RouterProvider router={router} /> : <h1>Loading...</h1>}</>
  );
}

export default App;
