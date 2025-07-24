import PropTypes from "prop-types";

import { setActiveSort } from "../../helpers/product";

const ShopTag = ({ tags, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Tag </h4>
<<<<<<< HEAD
      <div className="sidebar-widget-tag mt-25">
=======
      <div className="sidebar-widget-list mt-25">
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
        {tags ? (
          <ul>
            {tags.map((tag, key) => {
              return (
                <li key={key}>
<<<<<<< HEAD
                  <button
                    onClick={e => {
                      getSortParams("tag", tag);
                      setActiveSort(e);
                    }}
                  >
                    {tag}
                  </button>
=======
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={(e) => {
                        getSortParams("tag", tag);
                        setActiveSort(e);
                      }}
                    >
                      <span className="checkmark" /> {tag}
                    </button>
                  </div>
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
                </li>
              );
            })}
          </ul>
        ) : (
          "No tags found"
        )}
      </div>
    </div>
  );
};

ShopTag.propTypes = {
  getSortParams: PropTypes.func,
<<<<<<< HEAD
  tags: PropTypes.array
=======
  tags: PropTypes.array,
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
};

export default ShopTag;
