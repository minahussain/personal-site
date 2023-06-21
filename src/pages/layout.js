import * as React from "react";
import Navbar from "../components/menus/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <div className="main">
      <title>Mina Hussain</title>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
