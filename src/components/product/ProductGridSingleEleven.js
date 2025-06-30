import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";
import { addToWishlist } from "../../store/slices/wishlist-slice";

const ProductGridSingleEleven = ({
  product,
  currency,
  wishlistItem,
  compareItem,
  spaceBottomClass,
  colorClass,
  productGridStyleClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);
  const dispatch = useDispatch();

  return (
    <Fragment>
        <div className={clsx("product-wrap-10", spaceBottomClass, colorClass, productGridStyleClass)}>
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              <img
                className="default-img img-fluid"
                src={process.env.PUBLIC_URL + product.image[0]}
                alt=""
              />
            
                <img
                  className="hover-img img-fluid"
                  src={process.env.PUBLIC_URL + product.image[0]}
                  alt=""
                />
            </Link>
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? <span>-{product.discount}%</span> : ""}
                {product.new ? <span>New</span> : ""}
              </div>
            ) : (
              ""
            )}

            <div className="product-action-2">
           

              <button onClick={() => setModalShow(true)} title="Quick View">
                <i className="fa fa-eye"></i>
              </button>

              <button
                className={wishlistItem !== undefined ? "active" : ""}
                disabled={wishlistItem !== undefined}
                title={
                  wishlistItem !== undefined
                    ? "Added to wishlist"
                    : "Add to wishlist"
                }
                onClick={() => dispatch(addToWishlist(product))}
              >
                <i className="fa fa-heart-o" />
              </button>
            </div>
          </div>
          <div className="product-content-2">
            <div className="title-price-wrap-2">
              <h3>
                <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                  {product.name}
                </Link>
              </h3>
             
            </div>
          </div>
        </div>
      {/* product modal */}
      <ProductModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            product={product}
            currency={currency}
            discountedPrice={discountedPrice}
            finalProductPrice={finalProductPrice}
            finalDiscountedPrice={finalDiscountedPrice}
            wishlistItem={wishlistItem}
            compareItem={compareItem}
      />
    </Fragment>
  );
};

ProductGridSingleEleven.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  wishlistItem: PropTypes.shape({})
};

export default ProductGridSingleEleven;
