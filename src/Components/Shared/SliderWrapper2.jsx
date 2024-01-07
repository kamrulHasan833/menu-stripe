// eslint-disable-next-line react/prop-types
const SliderWrapper2 = ({ index, hovering, children }) => {
  return (
    <div
      className={`absolute z-[25] transition-all duration-300 ${
        hovering === index
          ? "opacity-100 transform-none "
          : hovering > index
          ? "  -translate-y-24 opacity-0 invisible"
          : "translate-y-24 opacity-0 invisible"
      }`}
    >
      {children}
    </div>
  );
};

export default SliderWrapper2;
