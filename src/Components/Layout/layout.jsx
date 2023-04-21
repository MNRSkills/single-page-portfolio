// create a arrow component called layout
import React from "react";

import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default Layout;
