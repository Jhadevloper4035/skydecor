import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import { EffectFade, Thumbs } from 'swiper';
=======
import { EffectFade, Thumbs } from "swiper";
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Swiper, { SwiperSlide } from "../../components/swiper";

const ProductImageGallery = ({ product }) => {
<<<<<<< HEAD
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);
  const slides = product?.image.map((img, i) => ({
      src: process.env.PUBLIC_URL + img,
      key: i,
=======
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);
  const slides = product?.image.map((img, i) => ({
    src: process.env.PUBLIC_URL + img,
    key: i,
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
  }));

  // swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
<<<<<<< HEAD
      crossFade: true
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true
  };

  return (
=======
      crossFade: true,
    },
    // thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  // const thumbnailSwiperParams = {
  //   onSwiper: setThumbsSwiper,
  //   spaceBetween: 10,
  //   slidesPerView: 4,
  //   touchRatio: 0.2,
  //   freeMode: true,
  //   loop: true,
  //   slideToClickedSlide: true,
  //   navigation: true
  // };

  return (
    
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
    <Fragment>
      <div className="product-large-image-wrapper">
        {product.discount || product.new ? (
          <div className="product-img-badges">
            {product.discount ? (
              <span className="pink">-{product.discount}%</span>
            ) : (
              ""
            )}
            {product.new ? <span className="purple">New</span> : ""}
          </div>
        ) : (
          ""
        )}
        {product?.image?.length ? (
          <Swiper options={gallerySwiperParams}>
            {product.image.map((single, key) => (
              <SwiperSlide key={key}>
<<<<<<< HEAD
                <button className="lightgallery-button" onClick={() => setIndex(key)}>
=======
                <button
                  className="lightgallery-button"
                  onClick={() => setIndex(key)}
                >
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
                  <i className="pe-7s-expand1"></i>
                </button>
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL + single}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
            <AnotherLightbox
<<<<<<< HEAD
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </Swiper>
        ) : null}

      </div>
      <div className="product-small-image-wrapper mt-15">
        {product?.image?.length ? (
          <Swiper options={thumbnailSwiperParams}>
            {product.image.map((single, key) => (
              <SwiperSlide key={key}>
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL + single}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
=======
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={slides}
              plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </Swiper>
        ) : null}
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
      </div>
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
<<<<<<< HEAD
  product: PropTypes.shape({})
=======
  product: PropTypes.shape({}),
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
};

export default ProductImageGallery;
