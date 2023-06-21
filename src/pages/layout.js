import * as React from "react";
import Navbar from "../components/menus/navbar";

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
