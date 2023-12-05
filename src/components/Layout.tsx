import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function Layout(data:any) {

  return (
    <>
      <Navbar />
      <Outlet context={ data } />
      <Footer />
    </>
  );
}

// export const useLayoutContext = useOutletContext()
