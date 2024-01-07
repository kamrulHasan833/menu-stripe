import PropTypes from "prop-types";

import { MdKeyboardArrowRight } from "react-icons/md";
const Arrow = ({ color, className }) => {
  return (
    <p className="flex items-center -ml-2">
      <span
        className={`translate-x-[11px] translate-y-[.1px] w-[9px] h-[2px] opacity-0 group-hover:opacity-100 group-hover:translate-x-[15px] transition-all duration-300 ${
          color ? "bg-white" : "bg-black"
        } ${className}`}
      ></span>
      <MdKeyboardArrowRight
        className={`text-xl  transition-all duration-300 group-hover:translate-x-1  ${
          color ? "text-white" : "text-black"
        }`}
      />
    </p>
  );
};

Arrow.propTypes = {
  color: PropTypes.bool,
  className: PropTypes.string,
};

export default Arrow;
