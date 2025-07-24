import PropTypes from "prop-types";
import clsx from "clsx";
import {
  getIndividualCategories,
  getIndividualTags,
<<<<<<< HEAD
  getIndividualColors,
  getProductsIndividualSizes
} from "../../helpers/product";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
import ShopColor from "../../components/product/ShopColor";
=======
  // getIndividualColors,
  getProductsIndividualSizes,
} from "../../helpers/product";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
// import ShopColor from "../../components/product/ShopColor";
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
import ShopSize from "../../components/product/ShopSize";
import ShopTag from "../../components/product/ShopTag";

const ShopSidebar = ({ products, getSortParams, sideSpaceClass }) => {
  const uniqueCategories = getIndividualCategories(products);
<<<<<<< HEAD
  const uniqueColors = getIndividualColors(products);
=======
  // const uniqueColors = getIndividualColors(products);
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
  const uniqueSizes = getProductsIndividualSizes(products);
  const uniqueTags = getIndividualTags(products);

  return (
    <div className={clsx("sidebar-style", sideSpaceClass)}>
      {/* shop search */}
      <ShopSearch />

      {/* filter by categories */}
      <ShopCategories
        categories={uniqueCategories}
        getSortParams={getSortParams}
      />

<<<<<<< HEAD
      {/* filter by color */}
      <ShopColor colors={uniqueColors} getSortParams={getSortParams} />
=======
      {/* filter by tag */}
      <ShopTag tags={uniqueTags} getSortParams={getSortParams} />

      {/* <ShopColor colors={uniqueTags} getSortParams={getSortParams} /> */}
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6

      {/* filter by size */}
      <ShopSize sizes={uniqueSizes} getSortParams={getSortParams} />

<<<<<<< HEAD
      {/* filter by tag */}
      <ShopTag tags={uniqueTags} getSortParams={getSortParams} />
=======
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
<<<<<<< HEAD
  sideSpaceClass: PropTypes.string
=======
  sideSpaceClass: PropTypes.string,
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
};

export default ShopSidebar;
