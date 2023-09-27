import React from "react";
import Logo from "./logo";
import Menu from "./menu";
function Sidebar() {
  return (
    <div className="w-[275px] min-h-screen max-h-screen px-2 flex flex-col overflow-auto">
      <Logo></Logo>
      <Menu></Menu>
      <div className="mt-auto">
        <div className="my-3">test</div>
      </div>
    </div>
  );
}

export default Sidebar;
