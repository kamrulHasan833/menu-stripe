import PropTypes from "prop-types";
import Arrow from "./Arrow";
import ItemSubMenu1 from "./ItemSubMenu1";

const SubmeuRight = ({ items, hovering, index }) => {
  return (
    <>
      <ul
        className={`grid lgs:grid-cols-2 gap-6 transition-all duration-300 ${
          hovering === 0 ? "grid-rows-6" : "grid-rows-5 "
        } `}
      >
        {items.map((item, id) => (
          <ItemSubMenu1 key={id} item={item} />
        ))}
      </ul>
      {(hovering === 1 || index === 1) && (
        <a
          href="#"
          className="flex gap-4 items-center bg-[#F6F9FB] px-4 py-3 mt-6 group rounded-md"
        >
          <div>
            <svg
              className="BasicIcon BasicIcon--balance FinanceAutomationSubSectionFooter__icon fill-icon-color group-hover:fill-title-color"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 1h8a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8.682 7a5.98 5.98 0 0 1 1.249-.634A1 1 0 0 0 9 5H.999a1 1 0 0 0 0 2h7.682ZM6.803 9a5.96 5.96 0 0 0-.72 2H2a1 1 0 1 1 0-2h4.803ZM6.803 15a5.96 5.96 0 0 1-.72-2H1a1 1 0 1 0 0 2h5.803Z"
                fill="var(--basicIconColor)"
              ></path>
            </svg>
          </div>{" "}
          <div className="flex gap-1 items-center">
            <h3>Automate revenue and finance on Stripe </h3>
            <Arrow color={false} />
          </div>
        </a>
      )}
    </>
  );
};

SubmeuRight.propTypes = {
  items: PropTypes.array,
  hovering: PropTypes.number,
  index: PropTypes.number,
};

export default SubmeuRight;
