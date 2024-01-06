import PropTypes from "prop-types";

const SectionWrapper = ({ children }) => {
  return <div className="max-w-standard mx-8 xl:mx-auto ">{children}</div>;
};

SectionWrapper.propTypes = {
  children: PropTypes.element,
};

export default SectionWrapper;
