import PropTypes from "prop-types";

const ItemSubMenuCommon = ({ item }) => {
  const { name, icon } = item;
  return (
    <li className="group">
      <a href="#" className="flex gap-x-2 items-center">
        <span>{icon}</span>
        <span className="font-semibold text-title-color opacity-95 capitalize lgs:text-sm">
          {name}
        </span>
      </a>
    </li>
  );
};

ItemSubMenuCommon.propTypes = {
  item: PropTypes.object,
};

export default ItemSubMenuCommon;
