import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
function Menu() {
  return (
    <div>
      <div className="mt-0.5 mb-1">
        <NavLink className="py-1 block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full inline-flex items-center  group-hover:bg-[#eff3f41a] transition-colors",
                { "font-bold": isActive }
              )}
            >
              {!isActive && (
                <svg
                  width={26.25}
                  height={26.25}
                  fill="#e7e9ea"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
                >
                  <path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path>
                </svg>
              )}
              {isActive && (
                <svg
                  width={26.25}
                  height={26.25}
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
                >
                  <g>
                    <path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path>
                  </g>
                </svg>
              )}
              <div className="mr-4 ml-5 text-xl">Home</div>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
