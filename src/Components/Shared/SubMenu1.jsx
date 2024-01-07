import PropTypes from "prop-types";
import { useState } from "react";
import subMenuItems from "../../../public/data/productMenuItems";
import SliderWrapper2 from "./SliderWrapper2";
import SubmeuRight from "./SubmeuRight";

const SubMenu1 = ({ index }) => {
  const [hovering, setHovering] = useState(0);
  const [popoverTop, setPopoverTop] = useState(0);
  const [popoverHeight, setPopoverHeight] = useState(null);

  const [currentItems, setCurrentItems] = useState(
    subMenuItems[index ? index : 0].childItems
  );

  return (
    <div className="grid lgs:grid-cols-3 rounded-lg lgs:w-[814px] lgs:h-[419px] h-">
      {/* ===== submenu left ======*/}
      <div className="hidden lgs:block col-start-1 col-span-1 bg-bg-secondary relative mr-1 h-full">
        <ul className="absolute left-0 h-full bg-transparent z-50 w-full">
          {subMenuItems.length > 0 &&
            subMenuItems.map(({ name, desc, childItems }, idx) => (
              <li
                key={idx}
                className={` p-4 `}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  setHovering(idx);
                  setCurrentItems(childItems);
                  setPopoverTop(target.offsetTop);
                  setPopoverHeight(target.offsetHeight);
                }}
              >
                <h3 className="font-semibold text-title-color text-sm capitalize">
                  {name}
                </h3>
                <p className="text-desc-color text-sm">{desc}</p>
              </li>
            ))}
        </ul>
        <div
          style={{
            top: popoverTop,
            height: popoverHeight || "92px",
          }}
          className={`absolute w-[98.50%]  left-0 bg-white transition-all duration-300 z-[19]`}
        ></div>
        <span
          className={`absolute w-5 h-5 rounded-[3px] -right-[5px]  transition-all duration-300 border-4 border-bg-secondary z-[15] ${
            hovering === 0
              ? "top-9 bg-white "
              : hovering === 1
              ? "top-[126px] bg-white"
              : " top-[220px] bg-white"
          } rotate-45 -z-1`}
        ></span>
      </div>

      {/* ======= submenu right ======== */}
      <div className="col-start-2 col-span-2 px-6 pt-6 pb-6 h-full">
        <div className="flex flex-col h-full">
          {/* menu for lagrge device and mobile */}
          <div className="w-full flex-grow h-full">
            {/* title */}

            <h3 className="block lgs:hidden font-bold text-title-color opacity-60 group-hover:opacity-100 text-sm mb-5">
              {index === 0
                ? "GLOBAL PAYMENTS"
                : index === 1
                ? "REVENUE AND FINANCE AUTOMATION"
                : index === 2
                ? "BANKING-AS-A-SERVICE"
                : ""}
            </h3>

            {typeof index === "number" ? (
              <SubmeuRight
                items={currentItems}
                hovering={hovering}
                index={index}
              />
            ) : (
              subMenuItems.map((item, id) => (
                <SliderWrapper2 hovering={hovering} index={id} key={id}>
                  <SubmeuRight
                    items={currentItems}
                    hovering={hovering}
                    index={index}
                  />
                </SliderWrapper2>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

SubMenu1.propTypes = {
  index: PropTypes.number,
};
export default SubMenu1;
