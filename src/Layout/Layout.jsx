import React from "react";
import ResponsiveAppBar from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{minHeight: 600}}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
