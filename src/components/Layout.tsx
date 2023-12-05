import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Footer from "./Footer";

export default function Layout() {
  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
