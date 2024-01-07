import { useRef, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Arrow from "../Shared/Arrow";
import MobileMenu from "../Shared/MobileMenu";
import SectionWrapper from "../Shared/SectionWrapper";
import ForwaredSlideWrapper from "../Shared/SlideWrapper";
import SubMenu1 from "../Shared/SubMenu1";
import SubMenu2 from "../Shared/SubMenu2";
import SubMenu3 from "../Shared/SubMenu3";
import SubMenu4 from "../Shared/SubMenu4";

const navItems = [
  {
    route: "#",
    name: "Products",
  },
  {
    route: "#",
    name: "Solutoins",
  },
  {
    route: "#",
    name: "Developers",
  },
  {
    route: "#",
    name: "Resources",
  },
  {
    route: "#",
    name: "Pricing",
  },
];
const defalutHeightWidth = [
  { height: 419, width: 814 },
  { height: 488, width: 604 },
  { height: 382, width: 604 },
  { height: 306, width: 530 },
];
const Navbar = () => {
  const [hovering, setHovering] = useState(null);
  const [popoverLeft, setPopoverLeft] = useState(null);
  const [popoverHeight, setPopoverHeight] = useState(null);
  const [open, setOpen] = useState(false);
  const [popoverWidth, setPopoverWidth] = useState(null);
  const developersItem = useRef();
  const others = useRef();
  const refs = useRef([]);

  // handle mouse enter event
  const handleMouseEnter = (event, id) => {
    // set offset left of each element
    const currentElement = event.currentTarget;
    if (id !== navItems.length - 1) {
      setHovering(id);
      id === 3
        ? setPopoverLeft(developersItem.current.offsetLeft - 40)
        : setPopoverLeft(
            currentElement.offsetLeft - (id === 0 ? 100 : id === 1 ? 60 : 40)
          );
    } else {
      setHovering(null);
      setPopoverHeight(null);
      setPopoverWidth(null);
    }

    // set height and width of submenu container
    const currentSubmenu = refs.current[id];
    if (currentSubmenu) {
      setPopoverHeight(currentSubmenu.offsetHeight);
      setPopoverWidth(currentSubmenu.offsetWidth);
    } else if (id !== 4) {
      setPopoverHeight(defalutHeightWidth[id].height);
      setPopoverWidth(defalutHeightWidth[id].width);
    }
  };

  return (
    <>
      <SectionWrapper>
        <nav
          className="relative flex w-full  justify-between gap-5  items-center max-md:max-w-full max-md:flex-wrap  "
          onMouseLeave={() => {
            setHovering(null);
            setPopoverHeight(null);
            setPopoverWidth(null);
          }}
        >
          <div className="flex items-start justify-between gap-10 max-md:max-w-full max-md:flex-wrap relative pt-8 pb-4 lgs:pt-0 lgs:pb-0">
            {/* ========header logo ======== */}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c53ef78e2fed7597be0e5c14ad7a0a6beb2a15176528ef902c111211111cd9?apiKey=3cf9b28bec5b4f688167ac3255d22af9&"
              className="aspect-[2.06] object-contain object-center w-[60px] justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full hover:opacity-70"
              onMouseEnter={() => {
                setHovering(null);
                setPopoverHeight(null);
                setPopoverWidth(null);
              }}
            />

            {/* ======== main menu ======== */}
            <ul className="hidden lgs:block ">
              {navItems.length > 0 &&
                navItems.map(({ name, route }, id) => (
                  <li key={id} className="inline-block">
                    <a
                      href={route}
                      className={`justify-center text-white text-center text-base font-medium leading-6 tracking-wide self-center my-auto py-[22px] hover:opacity-70 inline-block ${
                        id === 0
                          ? "pr-5"
                          : id === navItems.length - 1
                          ? "pl-5"
                          : "px-5"
                      }`}
                      {...{ ref: id === 2 ? developersItem : others }}
                      onMouseOver={(e) => handleMouseEnter(e, id)}
                    >
                      {name}
                    </a>
                  </li>
                ))}
            </ul>

            {/* submenus */}
            {typeof hovering === "number" && (
              <div
                className={`absolute  shadow bg-white top-full rounded-lg   transition-all duration-300 z-20 border-4  ${
                  hovering === 0 ? "border-bg-secondary" : "border-white"
                }`}
                style={{
                  left: popoverLeft || 0,
                  width: popoverWidth || 0,
                  height: popoverHeight || 0,
                }}
              >
                <div
                  className={`absolute overflow-hidden z-[21] left-0 top-0 w-full h-full`}
                >
                  {/* products submenu */}
                  <ForwaredSlideWrapper
                    ref={(element) => (refs.current[0] = element)}
                    hovering={hovering}
                    index={0}
                  >
                    <SubMenu1 />
                  </ForwaredSlideWrapper>

                  {/* solution submenu */}
                  <ForwaredSlideWrapper
                    ref={(element) => (refs.current[1] = element)}
                    hovering={hovering}
                    index={1}
                  >
                    <SubMenu2 />
                  </ForwaredSlideWrapper>

                  {/* Developers submenu */}
                  <ForwaredSlideWrapper
                    ref={(element) => (refs.current[2] = element)}
                    hovering={hovering}
                    index={2}
                  >
                    <SubMenu3 />
                  </ForwaredSlideWrapper>

                  {/* resources submenu */}
                  <ForwaredSlideWrapper
                    ref={(element) => (refs.current[3] = element)}
                    hovering={hovering}
                    index={3}
                  >
                    <SubMenu4 />
                  </ForwaredSlideWrapper>
                </div>
                <span
                  className={`absolute w-4 h-4 rounded-[3px] -top-2 transition-all duration-300 ${
                    hovering === 0
                      ? "bg-bg-secondary left-32"
                      : hovering === 1
                      ? "left-28 bg-white"
                      : hovering === 2
                      ? "left-24 bg-white"
                      : "left-56 bg-white"
                  } rotate-45 z-20`}
                ></span>
              </div>
            )}
          </div>

          {/* ======== Header right ======== */}
          <div className="flex items-stretch gap-2.5">
            <div className="hidden lgs:flex items-center group">
              <div className="justify-center text-white text-sm font-medium leading-6 self-center grow whitespace-nowrap my-auto hover:opacity-70 ">
                Contact sales
              </div>
              <Arrow color={true} />
            </div>
            <div className="bg-white bg-opacity-20 hover:bg-opacity-35 lgs:flex items-stretch px-3.5 py-1 rounded-2xl hidden group">
              <div className="justify-center text-white text-sm font-medium leading-6">
                {" "}
                Sign in
              </div>
              <Arrow color={true} />
            </div>
          </div>

          <div className="block lgs:hidden">
            <button
              className=" bg-white bg-opacity-20 hover:bg-opacity-35 px-3 py-1 rounded-full"
              onClick={() => setOpen(true)}
            >
              <HiBars3 className="text-xl text-white " />
            </button>
          </div>
        </nav>
      </SectionWrapper>
      <MobileMenu setOpen={setOpen} open={open} />
    </>
  );
};

export default Navbar;
