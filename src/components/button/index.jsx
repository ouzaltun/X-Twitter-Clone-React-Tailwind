import React, { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
function Button({ size, children }) {
  return createElement(
    "button",
    {
      className: classNames(
        "bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold hover:bg-[#1a8cd8] transition-colors",
        {
          "px-4 h-9": size === "normal",
          "px-4 h-[52px] w-full justify-center text-[17px]": size === "large",
        }
      ),
    },
    children
  );
}

export default Button;

Button.PropTypes = {
  size: PropTypes.oneOf(["normal", "large"]),
};
Button.defaultProps = {
  size: "normal",
};
