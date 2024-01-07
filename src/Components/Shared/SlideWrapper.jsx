import React from "react";

// eslint-disable-next-line react/prop-types
const SlideWrapper = ({ index, hovering, children }, ref) => {
  return (
    <div
      className={`absolute z-[25] transition-all duration-300 ${
        hovering === index
          ? "opacity-100 transform-none "
          : hovering < index
          ? " translate-x-full lgs:-translate-x-24 opacity-0 invisible"
          : "translate-x-full lgs:translate-x-24 opacity-0 invisible"
      }`}
      ref={ref}
    >
      {children}
    </div>
  );
};

const ForwaredSlideWrapper = React.forwardRef(SlideWrapper);
export default ForwaredSlideWrapper;
