import { useRef, useState } from "react";
import SectionWrapper from "../Shared/SectionWrapper";
import SubMenu1 from "../Shared/SubMenu1";
import SubMenu2 from "../Shared/SubMenu2";

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
const Navbar = () => {
  const [hovering, setHovering] = useState(null);
  const [popoverLeft, setPopoverLeft] = useState(null);
  const [popoverHeight, setPopoverHeight] = useState(null);

  const developersItem = useRef();
  const others = useRef();

  // handle mouse enter event
  const handleMouseEnter = (event, id) => {
    if (id !== navItems.length - 1) {
      setHovering(id);
      id === 3
        ? setPopoverLeft(developersItem.current.offsetLeft - 40)
        : setPopoverLeft(
            event.currentTarget.offsetLeft -
              (id === 0 ? 100 : id === 1 ? 60 : 40)
          );
    } else {
      setHovering(null);
    }
  };
  console.log(developersItem.current, popoverHeight);
  return (
    <SectionWrapper>
      <nav
        className="relative flex w-full  justify-between gap-5  items-center max-md:max-w-full max-md:flex-wrap  "
        onMouseLeave={() => setHovering(null)}
      >
        <div className="flex items-start justify-between gap-10 max-md:max-w-full max-md:flex-wrap relative">
          {/* ========header logo ======== */}

          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c53ef78e2fed7597be0e5c14ad7a0a6beb2a15176528ef902c111211111cd9?apiKey=3cf9b28bec5b4f688167ac3255d22af9&"
            className="aspect-[2.06] object-contain object-center w-[60px] justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full hover:opacity-70"
            onMouseEnter={() => setHovering(null)}
          />

          {/* ======== main menu ======== */}
          <ul>
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
                    onMouseEnter={(e) => handleMouseEnter(e, id)}
                  >
                    {name}
                  </a>
                </li>
              ))}
          </ul>

          {/* submenu */}
          {typeof hovering === "number" && (
            <div
              className={`absolute shadow bg-white top-full rounded-lg   transition-all duration-300 z-20 border-4 ${
                hovering === 0 ? "border-bg-secondary" : "border-white"
              }`}
              style={{
                left: popoverLeft || 0,
              }}
            >
              {/* products submenu */}
              <div
                className={`absolute ${
                  hovering === 0 ? "opacity-100 " : "opacity-0"
                }`}
              >
                <SubMenu1 />
              </div>

              {/* solution submenu */}
              <div
                className={`absolute ${
                  hovering === 1 ? "opacity-100 " : "opacity-0"
                }`}
              >
                <SubMenu2 />
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
                } rotate-45 -z-1`}
              ></span>
            </div>
          )}
        </div>

        {/* ======== Header right ======== */}
        <div className="flex items-stretch gap-2.5">
          <div className="justify-center text-white text-sm font-medium leading-6 self-center grow whitespace-nowrap my-auto hover:opacity-70">
            Contact sales
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5948419154868ffda52eb149fb5754efd6968168a376278e1b104c880d8f889?apiKey=3cf9b28bec5b4f688167ac3255d22af9&"
            className="aspect-square object-contain object-center w-2.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <div className="bg-white bg-opacity-20 hover:bg-opacity-35 flex items-stretch justify-between gap-2.5 px-3.5 py-1 rounded-2xl">
            <div className="justify-center text-white text-sm font-medium leading-6">
              {" "}
              Sign in
            </div>

            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b387724d78259ac1bcd69ff9c0b6a8e6f90a4009bb3d3164bd9de95270213dc0?apiKey=3cf9b28bec5b4f688167ac3255d22af9&"
              className="aspect-square object-contain object-center w-2.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
        </div>
      </nav>
    </SectionWrapper>
  );
};

export default Navbar;
