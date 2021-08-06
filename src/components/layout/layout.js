import React, { useState } from "react";
import Header from "../header/header";
import SideBar from "../UI Elements/SideBar";

import "./layout.css";

const Layout = (props) => {
  const [open, isOpen] = useState(false);

  const openModalHandler = () => {
    isOpen(!open);
  };
  return (
    <div className="layout">
      {open && <SideBar onClick={openModalHandler} />}
      <header className="header">
        <Header onClick={openModalHandler} />
      </header>
      <div className="main">{props.children}</div>
      <div className="footer">copyright netflix 2022</div>;
    </div>
  );
};
export default Layout;
