import React from "react";
import Logo from "./logo";
import Menu from "./menu";
function Sidebar() {
  return (
    <div className="w-[275px] min-h-screen px-2">
      <Logo></Logo>
      <Menu></Menu>
    </div>
  );
}

export default Sidebar;
