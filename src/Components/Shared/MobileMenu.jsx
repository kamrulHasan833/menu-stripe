import { useState } from "react";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Arrow from "./Arrow";
import ForwaredSlideWrapper from "./SlideWrapper";
import SubMenu1 from "./SubMenu1";
import SubMenu2 from "./SubMenu2";
import SubMenu3 from "./SubMenu3";
import SubMenu4 from "./SubMenu4";

const mobileMenuItem1 = {
  title: "Products",
  items: [
    {
      name: "global payments",
      desc: "Accept payments online, in person, or through your platform",
    },
    {
      name: "Revenue and Finance Automation",
      desc: "Grow your business with automated revenue and finance.",
    },
    {
      name: "Banking-as-a-Service",
      desc: "Embed financial services in your platform or product",
    },
  ],
};

const mobileMenuItemAll = [
  "solution",
  "developers",
  "resources",
  "contact salse",
  "pricing",
];
// eslint-disable-next-line no-unused-vars, react/prop-types
const MobileMenu = ({ open, setOpen }) => {
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <div
      className={`absolute transition-all w-full duration-500 z-[1000] lgs:hidden justify-end top-0 left-0    ${
        open ? "flex h-screen  visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={` bg-white w-[95%] sm:w-[417px]  rounded-lg shadow-xl shadow-desc-color  m-6 mb-0 flex flex-col  ${
          open
            ? "min-h-[1100px] visible opacity-100"
            : "invisible opacity-0  h-0"
        }`}
      >
        {/* mobile menu header */}
        <div className="flex justify-between px-6  items-center overflow-hidden py-8">
          <div className="pb-6 relative ">
            <svg
              viewBox="0 0 60 25"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="25"
              className={`UserLogo variant-- transition-all duration-300 absolute ${
                isSubmenu
                  ? "-translate-x-24 opacity-0 invisible"
                  : "translate-x-0 opacity-100 visible"
              }`}
            >
              <title>Stripe logo</title>
              <path
                fill=" #635bff"
                d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"
                fillRule="evenodd"
              ></path>
            </svg>
            <button
              onClick={() => setIsSubmenu(false)}
              className={`text-[#635bff] absolute flex items-center transition-all duration-300 ${
                isSubmenu
                  ? "translate-x-0 opacity-100 visible"
                  : "translate-x-24 opacity-0 invisible"
              }`}
            >
              <MdOutlineKeyboardArrowLeft className="text-xl" />{" "}
              <span className="font-bold ">Back</span>
            </button>
          </div>
          <div>
            <button onClick={() => setOpen(false)}>
              <RxCross2 className="text-xl text-title-color inline-block" />
            </button>
          </div>
        </div>

        {/* Mobile menu main body  */}
        <div className="relative flex-grow overflow-hidden">
          <ul
            className={`absolute transition-all duration-300  z-[100] ${
              isSubmenu
                ? "-translate-x-24 opacity-0 invisible"
                : "translate-x-0 opacity-100 visible"
            }`}
          >
            <li className="bg-bg-secondary pb-5 mx-1">
              <p className="font-bold opac text-lg text-mobile-menu-item-color  py-4 border-b border-dashed border-desc-color border-opacity-15 px-5 ">
                {mobileMenuItem1.title}
              </p>
              <ul>
                {/* first item */}
                {mobileMenuItem1.items.map(({ name, desc }, id) => (
                  <li
                    onClick={() => {
                      setIsSubmenu(true);
                      setCurrentIndex(id);
                    }}
                    key={id}
                    className="flex justify-between items-center px-5 hover:opacity-70"
                  >
                    <button className="flex flex-col pt-5 ">
                      <span className="font-bold opac text-base capitalize text-mobile-menu-item-color   border-opacity-15">
                        {name}
                      </span>{" "}
                      <span className="text-start text-desc-color opacity-90 font-semibold">
                        {desc}
                      </span>
                    </button>
                    <button className="text-3xl text-mobile-menu-item-color  ">
                      <MdKeyboardArrowRight />
                    </button>
                  </li>
                ))}
              </ul>
            </li>

            {/* others item */}
            {mobileMenuItemAll.map((item, id) => (
              <li className=" mx-1 hover:opacity-70" key={id + 3}>
                <button
                  onClick={() => {
                    if (id < mobileMenuItemAll.length - 2) {
                      setIsSubmenu(true);
                      setCurrentIndex(id + 3);
                    }
                  }}
                  className={` font-bold opac text-lg text-mobile-menu-item-color py-4
                  px-5 capitalize flex justify-between w-full ${
                    id === mobileMenuItemAll.length - 1
                      ? ""
                      : " border-b border-dashed border-desc-color border-opacity-15"
                  }`}
                >
                  <span> {item}</span>{" "}
                  {id < mobileMenuItemAll.length - 2 && (
                    <span className="text-3xl text-mobile-menu-item-color  ">
                      {" "}
                      <MdKeyboardArrowRight />
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* mobile submenu */}
          <div
            className={` transition-all duration-300 border-t border-dashed border-desc-color border-opacity-15 ${
              isSubmenu
                ? "translate-x-0 opacity-100 visible"
                : "translate-x-full opacity-0 invisible"
            }`}
          >
            {/* submenu 1 */}
            <ForwaredSlideWrapper hovering={currentIndex} index={0}>
              <SubMenu1 index={0} />
            </ForwaredSlideWrapper>

            {/* submenu 2 */}
            <ForwaredSlideWrapper hovering={currentIndex} index={1}>
              <SubMenu1 index={1} />
            </ForwaredSlideWrapper>

            {/* submenu 3 */}
            <ForwaredSlideWrapper hovering={currentIndex} index={2}>
              <SubMenu1 index={2} />
            </ForwaredSlideWrapper>

            {/* submenu 4 */}
            <ForwaredSlideWrapper hovering={currentIndex} index={3}>
              <SubMenu2 />
            </ForwaredSlideWrapper>

            {/* submenu 5 */}
            <ForwaredSlideWrapper hovering={currentIndex} index={4}>
              <SubMenu3 />
            </ForwaredSlideWrapper>

            {/* submenu 6 */}
            <ForwaredSlideWrapper hovering={currentIndex} index={5}>
              <SubMenu4 />
            </ForwaredSlideWrapper>
          </div>
        </div>

        {/* mobile menu bottom */}
        <div className="bg-bg-secondary py-4 m-1 rounded-md">
          <div className="flex justify-center ">
            {" "}
            <a
              href="#"
              className="bg-[#635bff] px-4 py-1 text-white flex  justify-center group rounded-full capitalize tex-sm font-semibold"
            >
              <span>sign in </span>
              <Arrow color={true} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
