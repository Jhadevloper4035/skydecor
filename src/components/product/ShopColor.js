import PropTypes from "prop-types";

import { setActiveSort } from "../../helpers/product";

<<<<<<< HEAD
const ShopColor = ({ colors, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Color </h4>
      <div className="sidebar-widget-list mt-20">
        {colors ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("color", "");
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Colors{" "}
                </button>
              </div>
            </li>
            {colors.map((color, key) => {
=======
const ShopTag = ({ tags, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title"> All subcategories </h4>
      <div className="sidebar-widget-list mt-20">
        {tags ? (
          <ul>
            {tags.map((tag, key) => {
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={e => {
<<<<<<< HEAD
                        getSortParams("color", color);
                        setActiveSort(e);
                      }}
                    >
                      <span className="checkmark" /> {color}{" "}
=======
                        getSortParams("tag", tag);
                        setActiveSort(e);
                      }}
                    >
                      <span className="checkmark" /> {tag}
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No colors found"
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD
ShopColor.propTypes = {
  colors: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopColor;
=======
ShopTag.propTypes = {
  getSortParams: PropTypes.func,
  tags: PropTypes.array
};

export default ShopTag;
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
