import { useState } from "react";

const Navbar = () => {
  const [hovering, setHovering] = useState(null);
  const [popoverLeft, setPopoverLeft] = useState(null);
  const [popoverHeight, setPopoverHeight] = useState(null);
  console.log(hovering, popoverLeft);
  return (
    <nav
      className="relative flex w-full max-w-[1213px] justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5 "
      onMouseLeave={() => setHovering(null)}
    >
      <div className="flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c53ef78e2fed7597be0e5c14ad7a0a6beb2a15176528ef902c111211111cd9?apiKey=3cf9b28bec5b4f688167ac3255d22af9&"
          className="aspect-[2.06] object-contain object-center w-[68px] justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
          onMouseEnter={() => setHovering(null)}
        />

        <a
          href="#"
          className="justify-center text-white text-center text-base font-medium leading-6 tracking-wide self-center my-auto"
          onMouseEnter={(event) => {
            setHovering(0);
            setPopoverLeft(event.currentTarget.offsetLeft - 90);
          }}
        >
          Products
        </a>
        <a
          href="#"
          className="justify-center text-white text-center text-base font-medium leading-6 tracking-wide self-center my-auto"
          onMouseEnter={(event) => {
            setHovering(1);
            setPopoverLeft(event.currentTarget.offsetLeft - 90);
          }}
        >
          Solutions
        </a>
        <a
          href="#"
          className="justify-center text-white text-center text-base font-medium leading-6 tracking-wide self-center my-auto"
          onMouseEnter={(event) => {
            setHovering(2);
            setPopoverLeft(event.currentTarget.offsetLeft - 90);
          }}
        >
          Developers
        </a>
        <a
          href="#"
          className="justify-center text-white text-center text-base font-medium leading-6 tracking-wide self-center my-auto"
          onMouseEnter={() => {
            setHovering(3);
          }}
        >
          Resources
        </a>
        <a
          href="#"
          className="justify-center text-white text-base font-medium leading-6 tracking-wide self-center grow whitespace-nowrap my-auto"
          onMouseEnter={() => setHovering(null)}
        >
          Pricing
        </a>
        {typeof hovering === "number" && (
          <div
            className="absolute shadow bg-white mt-10 p-5 rounded w-[600px] transition-all duration-300"
            style={{
              left: popoverLeft || 0,
            }}
          >
            {/* Our popover */}
          </div>
        )}
      </div>

      <div className="flex items-stretch gap-2.5">
        <div className="justify-center text-white text-sm font-medium leading-6 self-center grow whitespace-nowrap my-auto">
          Contact sales
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5948419154868ffda52eb149fb5754efd6968168a376278e1b104c880d8f889?apiKey=3cf9b28bec5b4f688167ac3255d22af9&"
          className="aspect-square object-contain object-center w-2.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
        <div className="bg-white bg-opacity-20 flex items-stretch justify-between gap-2.5 px-3.5 py-2.5 rounded-2xl">
          <div className="justify-center text-white text-base font-medium leading-6">
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
  );
};

export default Navbar;
