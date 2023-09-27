import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utilies/consts";
import More from "./more";
import New from "./new";
function Menu() {
  return (
    <nav>
      <div className="mt-0.5 mb-1">
        {mainMenu.map((menu, index) => (
          <NavLink key={index} to={menu.path} className=" block group">
            {({ isActive }) => (
              <div
                className={classNames(
                  "py-3 px-3 rounded-full inline-flex items-center  group-hover:bg-[#eff3f41a] transition-colors",
                  { "font-bold": isActive }
                )}
              >
                <div className="w-[26.25px] h-[26.25px] relative">
                  {menu?.notification && (
                    <span className="w-[18px] h-[18px] absolute rounded-full bg-[#1d9bf0] flex justify-center items-center -top-1.5 -right-1">
                      {menu?.notification}
                    </span>
                  )}
                  {!isActive && menu.icon.passive}
                  {isActive && menu.icon.active}
                </div>
                <div className="mr-4 ml-5 text-xl">{menu.title}</div>
              </div>
            )}
          </NavLink>
        ))}
        <More></More>
      </div>
      <New></New>
    </nav>
  );
}

export default Menu;
