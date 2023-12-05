import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function Layout() {
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

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
