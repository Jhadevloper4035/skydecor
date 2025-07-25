import { Fragment, useState, useEffect } from "react";
<<<<<<< HEAD
import Paginator from "react-hooks-paginator"; 
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
=======
import Paginator from "react-hooks-paginator";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
import { getSortedProducts } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopTopbar from "../../wrappers/product/ShopTopbar";
import ShopProducts from "../../wrappers/product/ShopProducts";

const ShopGridNoSidebar = () => {
  const [layout, setLayout] = useState("grid three-column");
  const sortType = "";
  const sortValue = "";
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
<<<<<<< HEAD
  const { products } = useSelector((state) => state.product);

  const pageLimit = 15;
  let { pathname } = useLocation();

  const getLayout = layout => {
=======

  const { tag } = useParams();

  const products = useSelector((state) =>
    state.product.products.filter((product) => product.tag[0] === tag)
  );


  const pageLimit = 100;
  let { pathname } = useLocation();

  const getLayout = (layout) => {
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
    setLayout(layout);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <Fragment>
      <SEO
        titleTemplate="Shop Page"
        description="Shop page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
<<<<<<< HEAD
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Shop", path: process.env.PUBLIC_URL + pathname }
          ]} 
=======
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Shop", path: process.env.PUBLIC_URL + pathname },
          ]}
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
        />

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* shop topbar default */}
                <ShopTopbar
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  productCount={products.length}
                  sortedProductCount={currentData.length}
                />

                {/* shop page content default */}
                <ShopProducts layout={layout} products={currentData} />

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ShopGridNoSidebar;
