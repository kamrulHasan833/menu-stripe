import subMenuItems from "../../../public/data/solutionsMenuItems";
import ItemSubMenuCommon from "./ItemSubMenuCommon";

const SubMenu2 = () => {
  return (
    <div className="w-full lgs:w-[604px] lgs:h-[488px] ">
      <div className="grid pt-8">
        {subMenuItems.map(({ category, items }, id) => (
          <div
            key={id}
            className={` px-8 border-b border-dashed border-opacity-30 pb-6 border-desc-color ${
              id === 2
                ? "border-b-0 lgs:bg-bg-secondary h-[144px] rounded-md"
                : id === 0
                ? "border-b  "
                : "pb-6 lgs:border-b"
            }`}
          >
            <h3
              className={`font-semibold mb-3 text-item-title-color uppercase text-sm ${
                id === 0 ? "mt-0" : "mt-6"
              }`}
            >
              {category}
            </h3>
            <ul className="grid grid-cols-1 lgs:grid-cols-2 gap-x-6 gap-y-3">
              {items.map((item, id) => (
                <ItemSubMenuCommon key={id} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubMenu2;
