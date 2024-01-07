import { BsArrowRightShort } from "react-icons/bs";

import submenuItems from "../../../public/data/develpoerMenuItems";
import ItemSubMenuCommon from "./ItemSubMenuCommon";

const SubMenu3 = () => {
  const { submenuBottom, submenuMiddle } = submenuItems;
  return (
    <div className="w-full lgs:w-[604px] lgs:h-[382px] pt-6">
      {/* submenu top */}
      <div className="flex gap-x-2 group px-6 pb-6">
        <div className="mt-[2px]">
          <svg
            className="BasicIcon BasicIcon--docs SiteNavItem__basicIcon fill-icon-color group-hover:fill-title-color"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.04001 2C5.95001 2 7.50001 2.9 7.50001 4.55V15C7.05001 15 6.60001 14.7 6.33001 14.47C5.47001 13.76 3.81001 13.72 2.02001 13.72H0.830009C0.71992 13.7201 0.610944 13.698 0.509579 13.655C0.408213 13.6121 0.316535 13.5491 0.240009 13.47C0.0850522 13.3088 -0.00103162 13.0936 9.33181e-06 12.87V2.85C9.33181e-06 2.38 0.370009 2 0.830009 2H4.03001H4.04001ZM15.17 2C15.39 2 15.6 2.1 15.76 2.25C15.91 2.41 16 2.63 16 2.85V12.87C16 13.1 15.91 13.31 15.76 13.47C15.6823 13.5504 15.589 13.614 15.4858 13.657C15.3827 13.7 15.2718 13.7214 15.16 13.72H13.98C12.18 13.72 10.53 13.76 9.68001 14.47C9.40001 14.7 8.95001 15 8.50001 15V4.55C8.50001 2.91 10.05 2 11.96 2H15.16H15.17Z"
              fill="var(--basicIconColor)"
            ></path>
          </svg>
        </div>
        <div>
          <p className="font-semibold text-title-color opacity-95 capitalize lgs:text-sm flex gap-2 items-center">
            <span>Documentation</span>{" "}
            <BsArrowRightShort className="text-[0] group-hover:text-lg transition-all duration-300" />
          </p>
          <p className=" mb-3 text-item-title-color group-hover:text-title-color  lgs:text-sm">
            {" "}
            Start integrating Stripe’s products and tools
          </p>
        </div>
      </div>
      {/* submenu middle */}
      <div>
        <div className="grid lgs:grid-cols-2 gap-6 pl-12 pr-6 pb-6">
          {submenuMiddle.map(({ name, items }, id) => (
            <div key={id}>
              <h3 className="uppercase lgs:text-sm text-item-title-color font-semibold mb-2">
                {name}
              </h3>
              <ul className="space-y-1">
                {items.map((item, id) => (
                  <li key={id}>
                    <a
                      href="#"
                      className="lgs:text-sm text-item-title-color hover:text-title-color"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* submenu bottom */}
      <div className="lgs:bg-bg-secondary h-[114px]  rounded-md">
        <ul className="grid lgs:grid-cols-2 gap-x-6 gap-y-3 px-6 pt-6 items-center">
          {submenuBottom.map((item, id) => (
            <ItemSubMenuCommon key={id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubMenu3;
