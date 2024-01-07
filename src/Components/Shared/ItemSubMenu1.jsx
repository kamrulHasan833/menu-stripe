import PropTypes from "prop-types";
import { BsArrowRightShort } from "react-icons/bs";

const ItemSubMenu1 = ({ item }) => {
  const { title, details, icon } = item;
  return (
    <li>
      <a href="#" className="flex gap-6 group">
        <div>{icon}</div>
        <div className="lgs:text-sm font-semibold text-title-color  ">
          <div className="flex gap-2 items-center">
            {" "}
            <p>{title} </p>{" "}
            <BsArrowRightShort className="hidden lgs:block text-[0] group-hover:text-lg transition-all duration-300" />
          </div>
          <p className="font-normal text-title-color opacity-75 group-hover:opacity-100">
            {details}
          </p>
        </div>
      </a>
    </li>
  );
};

ItemSubMenu1.propTypes = {
  item: PropTypes.object,
};

export default ItemSubMenu1;
