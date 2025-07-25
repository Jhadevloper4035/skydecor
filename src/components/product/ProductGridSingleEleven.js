import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";
<<<<<<< HEAD
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare } from "../../store/slices/compare-slice";
=======
import { addToWishlist } from "../../store/slices/wishlist-slice";
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6

const ProductGridSingleEleven = ({
  product,
  currency,
<<<<<<< HEAD
  cartItem,
=======
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
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
<<<<<<< HEAD
              {product.image.length > 1 ? (
                <img
                  className="hover-img img-fluid"
                  src={process.env.PUBLIC_URL + product.image[1]}
                  alt=""
                />
              ) : (
                ""
              )}
=======
            
                <img
                  className="hover-img img-fluid"
                  src={process.env.PUBLIC_URL + product.image[0]}
                  alt=""
                />
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
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
<<<<<<< HEAD
              {product.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Buy now"
                >
                  {" "}
                  <i className="fa fa-shopping-cart"></i>{" "}
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Link
                  to={`${process.env.PUBLIC_URL}/product/${product.id}`}
                  title="Select options"
                >
                  <i className="fa fa-cog"></i>
                </Link>
              ) : product.stock && product.stock > 0 ? (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className={
                    cartItem !== undefined && cartItem.quantity > 0
                      ? "active"
                      : ""
                  }
                  disabled={cartItem !== undefined && cartItem.quantity > 0}
                  title={
                    cartItem !== undefined ? "Added to cart" : "Add to cart"
                  }
                >
                  {" "}
                  <i className="fa fa-shopping-cart"></i>{" "}
                </button>
              ) : (
                <button disabled className="active" title="Out of stock">
                  <i className="fa fa-shopping-cart"></i>
                </button>
              )}
=======
           
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6

              <button onClick={() => setModalShow(true)} title="Quick View">
                <i className="fa fa-eye"></i>
              </button>

              <button
<<<<<<< HEAD
                className={compareItem !== undefined ? "active" : ""}
                disabled={compareItem !== undefined}
                title={
                  compareItem !== undefined
                    ? "Added to compare"
                    : "Add to compare"
                }
                onClick={() => dispatch(addToCompare(product))}
              >
                <i className="fa fa-retweet"></i>
              </button>
              <button
=======
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
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
