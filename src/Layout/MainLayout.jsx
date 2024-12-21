import React from "react";
import Navbar from "../Common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <main className="px-10 py-10">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
