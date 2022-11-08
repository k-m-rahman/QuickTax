import React from "react";
import { Outlet } from "react-router-dom";
import CommonFooter from "../pages/shared/Footer/CommonFooter";
import Header from "../pages/shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="dark:bg-slate-500 bg-slate-100 py-10">
        <Outlet></Outlet>
      </div>
      <CommonFooter></CommonFooter>
    </div>
  );
};

export default Main;
