<<<<<<< HEAD
import React, { Fragment } from "react"; 
=======
import React, { Fragment } from "react";
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
<<<<<<< HEAD
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
=======
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";

const Product = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  const { products } = useSelector((state) => state.product);
<<<<<<< HEAD
  const product = products.find(product => product.id === id);
  

  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Shop Product", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />

        {/* product description with image */}
=======
  const product = products.find((product) => product.id === id);

  return (
    <Fragment>
      <SEO titleTemplate="Product Page" description=" " />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Shop Product", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />

<<<<<<< HEAD
        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.fullDescription}
        />

        {/* related product slider */}
=======
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category[0]}
        />
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
