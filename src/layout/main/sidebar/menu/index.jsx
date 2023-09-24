import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utilies/consts";
import Button from "~/components/button";

function Menu() {
  return (
    <nav>
      <div className="mt-0.5 mb-1">
        {mainMenu.map((menu, index) => (
          <NavLink to={menu.path} className=" block group">
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
        <button className="py-[3px] block group">
          <div className="p-3 rounded-full inline-flex items-center  group-hover:bg-[#eff3f41a] transition-colors">
            <div className="w-[26.25px] h-[26.25px] relative">
              <svg
                width={26.25}
                height={26.25}
                fill="#e7e9ea"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
              >
                <g>
                  <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
                </g>
              </svg>
            </div>
            <div className="mr-4 ml-5 text-xl">Daha fazla</div>
          </div>
        </button>
      </div>
      <div className="py-4 -mt-3 w-[92%]">
        <Button size="large">Gönder</Button>
      </div>
    </nav>
  );
}

export default Menu;
