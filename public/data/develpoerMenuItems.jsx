import { HiBars3 } from "react-icons/hi2";

const submenuMiddle = [
  {
    name: "get Started",
    items: [
      "Prebuilt checkout ",
      "Libraries and SDKs ",
      "App integrations ",
      "Code samples ",
    ],
  },
  {
    name: "GUIDES",
    items: [
      "Accept online payments",
      "Manage subscriptions",
      "Send payments",
      "Set up in-person payments",
    ],
  },
];
const submenuBottom = [
  {
    name: "Full API Reference",
    icon: (
      <HiBars3 className=" fill-icon-color group-hover:fill-title-color text-lg" />
    ),
  },
  {
    name: "API Status ",
    icon: (
      <svg
        className="BasicIcon BasicIcon--status SiteNavItem__basicIcon fill-icon-color group-hover:fill-title-color"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 8.07H3.75L6.55 2L9.35 13.2L12.15 8.11L15 8.07"
          stroke="var(--basicIconColor)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    name: "API Changelog ",
    icon: (
      <svg
        className="BasicIcon BasicIcon--changelog SiteNavItem__basicIcon fill-icon-color group-hover:fill-title-color"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM6.58 5.72C6.70067 5.598 6.76794 5.43306 6.767 5.26146C6.76607 5.08987 6.697 4.92567 6.575 4.805C6.453 4.68433 6.28806 4.61706 6.11646 4.618C5.94487 4.61893 5.78067 4.688 5.66 4.81L2.93 7.54C2.86983 7.59952 2.82207 7.67038 2.78947 7.74848C2.75687 7.82658 2.74008 7.91037 2.74008 7.995C2.74008 8.07963 2.75687 8.16342 2.78947 8.24152C2.82207 8.31962 2.86983 8.39048 2.93 8.45L5.66 11.18C5.78067 11.302 5.94487 11.3711 6.11646 11.372C6.28806 11.3729 6.453 11.3057 6.575 11.185C6.697 11.0643 6.76607 10.9001 6.767 10.7285C6.76794 10.5569 6.70067 10.392 6.58 10.27L4.3 7.99L6.58 5.72ZM13.16 7.56L10.43 4.82C10.3093 4.69933 10.1457 4.63153 9.975 4.63153C9.80434 4.63153 9.64067 4.69933 9.52 4.82C9.39933 4.94067 9.33153 5.10434 9.33153 5.275C9.33153 5.44566 9.39933 5.60933 9.52 5.73L11.79 8.01L9.52 10.29C9.42075 10.4129 9.37048 10.5682 9.37886 10.726C9.38724 10.8838 9.45369 11.0329 9.56541 11.1446C9.67713 11.2563 9.82623 11.3228 9.984 11.3311C10.1418 11.3395 10.2971 11.2893 10.42 11.19L13.16 8.46C13.2785 8.34019 13.3449 8.17849 13.3449 8.01C13.3449 7.84151 13.2785 7.67981 13.16 7.56Z"
          fill="var(--basicIconColor)"
        ></path>
      </svg>
    ),
  },
  {
    name: "Build on Stripe Apps ",
    icon: (
      <svg
        className="BasicIcon BasicIcon--buildApp SiteNavItem__basicIcon fill-icon-color group-hover:fill-title-color"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 1C5 0.447715 5.44772 0 6 0H15C15.5523 0 16 0.447715 16 1V10C16 10.5523 15.5523 11 15 11H13V4C13 3.44772 12.5523 3 12 3H5V1ZM1 5C0.447715 5 0 5.44771 0 6V15C0 15.5523 0.447715 16 1 16H10C10.5523 16 11 15.5523 11 15V6C11 5.44772 10.5523 5 10 5H1Z"
          fill="var(--basicIconColor)"
        ></path>
      </svg>
    ),
  },
];
const submenuItems = { submenuMiddle, submenuBottom };
export default submenuItems;
