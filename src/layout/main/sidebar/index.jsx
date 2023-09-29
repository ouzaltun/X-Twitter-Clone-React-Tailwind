import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Account from "./account";
function Sidebar() {
  return (
    <div className="w-[275px] min-h-screen max-h-screen px-2 flex flex-col">
      <Logo></Logo>
      <Menu></Menu>
      <Account></Account>
    </div>
  );
}

export default Sidebar;
