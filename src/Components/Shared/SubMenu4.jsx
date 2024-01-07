import submenuItems from "../../../public/data/resourcesMenuItems";
import ItemSubMenuCommon from "./ItemSubMenuCommon";

const SubMenu4 = () => {
  return (
    <div className="w-[300%] lgs:w-[530px] lgs:h-[306px] pt-8">
      <div>
        <div className="box-border">
          {submenuItems.map(({ items }, id) => (
            <ul
              key={id}
              className={`grid lgs:grid-cols-2 gap-x-6 px-6 gap-y-4 ${
                id === 1
                  ? "lgs:bg-bg-secondary py-6 lgs:h-[114px] rounded-md  "
                  : "pb-6 border-b lgs:border-b-0 border-dashed border-desc-color border-opacity-15 "
              }`}
            >
              {items.map((item, idx) => (
                <ItemSubMenuCommon key={idx} item={item} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubMenu4;
