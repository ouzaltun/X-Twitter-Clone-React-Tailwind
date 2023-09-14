import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from "./rightbar";

function MainLayout() {
  return (
    <div className="w-[1265px] mx-auto flex">
      <Sidebar></Sidebar>
      <main className="flex-1 flex gap-[30px]">
        <main className="border-x max-w-[600px] border-[#2f3336] flex-1">
          <Outlet></Outlet>
        </main>
        <RightBar></RightBar>
      </main>
    </div>
  );
}

export default MainLayout;
