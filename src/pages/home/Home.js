import React, { Fragment, useEffect } from "react";
import clsx from "clsx";
import $ from "jquery";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";

import SEO from "../../components/seo";
import BlogFeaturedThree from "../../wrappers/blog-featured/BlogFeaturedThree";
import LayoutEight from "../../layouts/LayoutEight";
import HeroSliderThirtyOne from "../../wrappers/hero-slider/HeroSliderTen";
import TabProductTwenty from "../../wrappers/product/TabProductTwenty";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";

const HomeFurnitureSix = () => {
  useEffect(() => {
    const swiperslider = $(".swiper-slider");
    let x = 1;
    swiperslider.each(function () {
      const carouselElement = $(this);
      const columns = parseFloat($(this).data("columns"));
      const loop = $(this).data("loop");
      const autoplay2 = $(this).data("autoplay");
      //const autoplayspeed1 = $(this).data("autoplayspeed");
      const val_nav = $(this).data("arrows");
      const nav_arrow = $(this).data("arrows-class");
      const val_dots = $(this).data("dots");
      const val_dots_outside = $(this).data("outside");
      const val_center = $(this).data("center");
      let style = $(this).data("effect");
      let loopSlide = null;
      const sl_speed = 3000;

      carouselElement.addClass("pbmit-element-viewtype-carousel-" + x);

      let responsive_items;
      if (columns === 1 || columns === 1.6) {
        responsive_items = [columns, "1", "1", "1", "1"];
      } else if (columns === 2 || columns === 2.1) {
        responsive_items = [columns, "2", "2", "2", "1"];
      } else if (columns === 2.6) {
        responsive_items = [columns, "2.3", "2", "2", "1"];
      } else if (columns === 3 || columns === 3.5 || columns === 3.6) {
        responsive_items = [columns, "2", "2", "2", "1"];
      } else if (columns === 4 || columns === 4.5) {
        responsive_items = [columns, "4", "3", "2", "1"];
      } else if (columns === 5) {
        responsive_items = ["5", "4", "2", "2", "1"];
      } else if (columns === 6 || columns === 7) {
        responsive_items = ["6", "4", "3", "2", "1"];
      } else {
        responsive_items = ["3", "3", "2", "2", "1"];
      }

      if (val_dots === true) {
        carouselElement.append(
          '<div class="swiper-pagination swiper-pagination"></div>'
        );
      }

      if (val_nav === true) {
        if (!nav_arrow) {
          carouselElement.append('<div class="swiper-buttons"></div>');
          carouselElement
            .find(".swiper-buttons")
            .append(
              '<div class="swiper-button-next swiper-button-next-' +
                x +
                '"></div>'
            );
          carouselElement
            .find(".swiper-buttons")
            .append(
              '<div class="swiper-button-prev swiper-button-prev-' +
                x +
                '"></div>'
            );
        } else {
          $("." + nav_arrow).append(
            '<div class="swiper-button-next swiper-button-next-' +
              x +
              '"></div>'
          );
          $("." + nav_arrow).append(
            '<div class="swiper-button-prev swiper-button-prev-' +
              x +
              '"></div>'
          );
        }
      }

      let pagination_val = false;
      if (val_dots === true) {
        if (carouselElement.hasClass("pbmit-sep-number")) {
          pagination_val = {
            el: ".swiper-pagination",
            type: "fraction",
          };
        } else {
          pagination_val = {
            el: ".swiper-pagination",
            clickable: true,
          };
        }
      }

      let navigation_val = false;
      if (val_nav === true) {
        navigation_val = {
          nextEl: ".swiper-button-next-" + x,
          prevEl: ".swiper-button-prev-" + x,
        };
      }

      if (!style) {
        style = "slide";
      }

      let margin_val = 30;
      if (
        $(carouselElement).data("margin") !== "" ||
        $(carouselElement).data("margin") === "0"
      ) {
        margin_val = $(carouselElement).data("margin");
      }

      if (carouselElement.hasClass("marquee")) {
        const reverse_direction = $(this).data("reverse") || false;
        new Swiper(".pbmit-element-viewtype-carousel-" + x, {
          spaceBetween: 0,
          centeredSlides: true,
          speed: 12000,
          autoplay: {
            delay: 1,
            disableOnInteraction: true,
            reverseDirection: reverse_direction,
          },
          loop: true,
          slidesPerView: "auto",
          allowTouchMove: false,
          disableOnInteraction: true,
        });
      } else {
        new Swiper(".pbmit-element-viewtype-carousel-" + x, {
          loop: loop,
          navigation: navigation_val,
          pagination: pagination_val,
          slidesPerView: columns,
          spaceBetween: margin_val,
          loopedSlides: loopSlide,
          autoplay: autoplay2,
          effect: style,
          speed: sl_speed,
          grabCursor: false,
          centeredSlides: val_center,
          breakpoints: {
            1199: {
              slidesPerView: responsive_items[0],
            },
            991: {
              slidesPerView: responsive_items[1],
            },
            767: {
              slidesPerView: responsive_items[2],
            },
            575: {
              slidesPerView: responsive_items[3],
            },
            0: {
              slidesPerView: responsive_items[4],
            },
          },
        });

        if (val_dots_outside === true) {
          $(".pbmit-element-viewtype-carousel-" + x + " .swiper-wrapper").wrap(
            "<div class='overflow-hidden'></div>"
          );
        }
      }

      x = x + 1;
    });
  }, []);

  return (
    <Fragment>
      <SEO
        titleTemplate="Skydecor - Premium Quality Laminates Design Collections"
        description="Discover the widest range of high-quality laminates for every space at Skydecor, India's leading laminates manufacturer. Explore today!"
      />

      <LayoutEight
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerBorderStyle="fluid-border"
        headerPaddingClass="header-padding-2"
      >
        <HeroSliderThirtyOne
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          spaceBottomClass="pb-70"
        />

        <section
          className="rooms1  bg-cream"
          data-scroll-index={1}
          style={{ paddingBottom: "70px", paddingTop: "70px" }}
        >
          <div className="container">
            <div className="row text-center">
              <div className="welcome-content text-center">
                <h1 style={{ textTransform: "uppercase" }}>
                  SKYDECOR'S TRENDNG Laminates
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="item">
                  <div className="position-re o-hidden">
                    <img
                      src="assets\img\product\laminates\pvc-laminates.jpg"
                      alt=""
                    />
                  </div>
                  <span className="category">
                    <a href="modular-kitchens.php">Detail</a>
                  </span>
                  <div className="con">
                    <h5>
                      <a href="/">PVC Laminates</a>
                    </h5>
                    <div className="line" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="position-re o-hidden">
                    {" "}
                    <img
                      src="assets\img\product\laminates\decorative-laminates.jpg"
                      alt=""
                    />{" "}
                  </div>
                  <span className="category">
                    <a href="modular-kitchens.php">Detail</a>
                  </span>
                  <div className="con">
                    <h5>
                      <a href="modular-kitchens.php">Decorative Laminates</a>{" "}
                    </h5>
                    <div className="line" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="position-re o-hidden">
                    {" "}
                    <img
                      src="assets\img\product\laminates\liner-laminates.jpg"
                      alt=""
                    />{" "}
                  </div>
                  <span className="category">
                    <a href="modular-kitchens.php">Detail</a>
                  </span>
                  <div className="con">
                    <h5>
                      <a href="modular-kitchens.php">Liner Laminates</a>{" "}
                    </h5>

                    <div className="line" />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="item">
                  <div className="position-re o-hidden">
                    {" "}
                    <img
                      src="assets\img\product\laminates\acrylic-laminates.jpg"
                      alt=""
                    />{" "}
                  </div>
                  <span className="category">
                    <a href="modular-kitchens.php">Detail</a>
                  </span>
                  <div className="con">
                    <h5>
                      <a href="modular-kitchens.php">Acrylic Laminates</a>
                    </h5>
                    <div className="line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about" style={{ paddingBottom: "70px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 mb-30 animate-box"
                data-animate-effect="fadeInUp"
              >
                <div
                  className="skydecor-section-title "
                  style={{ marginBottom: 24 }}
                >
                  {" "}
                  The TOTAL LIVING CONCEPT{" "}
                </div>
                <p className="about-skydecor-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                  <br />
                  <br />
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                {/* call */}
              </div>
              <div
                className="col col-md-5  offset-md-1 animate-box"
                data-animate-effect="fadeInUp"
              >
                <img
                  src="https://res.cloudinary.com/dtlazsqas/image/upload/v1748340272/Logo-01_vvzhdt.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <BrandLogoSliderOne spaceBottomClass="pb-70" />

        <div className={clsx("welcome-area")}>
          <div className="container">
            <div className="welcome-content text-center">
              <h1 style={{ textTransform: "uppercase" }}>
                {" "}
                SKYDECOR'S TRENDNG Laminates
              </h1>
            </div>
          </div>
        </div>

        <TabProductTwenty
          spaceBottomClass="pb-70"
          category="furniture"
          productGridStyleClass="product-wrap-10--style2 product-wrap-10--style2--blue"
        />

        <section
          className="cta-bg-img"
          style={{ backgroundImage: "url(assets/img/banner/bg6.jpg)" }}
        >
          <div className="container text-center">
            <div className="inner-box">
              <h2>
                <img
                  src="assets/img/bg/textpart1.png"
                  style={{ height: 200, width: 600 }}
                  alt=""
                />
              </h2>
              <a href="./home" class="readmore">
                <i
                  class="fa-solid fa-arrow-right fa-xl"
                  style={{ color: "#fff" }}
                ></i>{" "}
              </a>
            </div>
          </div>
        </section>

        <section
          className="cta-bg-img"
          style={{ backgroundImage: "url(assets/img/banner/bg5.jpg)" }}
        >
          <div className="container text-center">
            <div className="inner-box">
              <h2>
                <img
                  src="assets/img/bg/textpart2.png"
                  alt=""
                  style={{ height: 250, width: 500 }}
                />
              </h2>
              <a href="./home" class="readmore">
                {" "}
                <i
                  class="fa-solid fa-arrow-right fa-xl"
                  style={{ color: "#fff" }}
                ></i>{" "}
              </a>
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: "70px", marginTop: "70px" }}>
          <div className="container">
            <div className={clsx("welcome-area")}>
              <div className="container">
                <div className="welcome-content text-center">
                  <h1 style={{ textTransform: "uppercase" }}>
                    It's time to #StayCurious
                  </h1>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center align-item-center">
              <div className="col-md-10">
                <div className="vid-area mb-30">
                  <video controls autoPlay loop muted>
                    <source
                      src="https://res.cloudinary.com/dtlazsqas/video/upload/v1748254339/videoplayback_zc120w.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://waltz.co.in/introvideo.webm"
                      type="video/webm"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-xl pbmit-element-timeline-style-1"
          style={{ paddingBottom: "70px" }}
        >
          <div className={clsx("welcome-area")}>
            <div className="container">
              <div className="welcome-content text-center">
                <h1 style={{ textTransform: "uppercase" }}>
                  It's time to #SkyDecor
                </h1>
              </div>
            </div>
          </div>
          <div className="container-fluid ">
            <div className="pbmit-timeline">
              <div
                className="swiper-slider"
                data-autoplay="false"
                data-loop="false"
                data-dots="false"
                data-arrows="false"
                data-columns={4}
                data-margin={30}
                data-effect="slide"
              >
                <div className="swiper-wrapper">
                  {/* Slide1 */}
                  <div className="pbmit-timeline-wrapper swiper-slide pbmit-slide-even">
                    <div className="pbmit-same-height steps-media pbmit-feature-image">
                      <img
                        src="https://xinterio-demo.pbminfotech.com/html-demo/images/history/time-line-01.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="steps-dot">
                      <i className="steps-dot-line" />
                      <span className="dot" />
                    </div>
                    <div className="pbmit-same-height steps-content_wrap">
                      <p className="pbmit-timeline-year">2015</p>
                      <h3 className="pbmit-timeline-title">Our Beginning</h3>
                      <p className="pbmit-timeline-desc">
                        Interior designers are independent business people.
                      </p>
                    </div>
                  </div>
                  {/* Slide2 */}
                  <div className="pbmit-timeline-wrapper swiper-slide">
                    <div className="pbmit-same-height steps-media pbmit-feature-image">
                      <img
                        src="https://xinterio-demo.pbminfotech.com/html-demo/images/history/time-line-02.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="steps-dot">
                      <i className="steps-dot-line" />
                      <span className="dot" />
                    </div>
                    <div className="pbmit-same-height steps-content_wrap">
                      <p className="pbmit-timeline-year">2017</p>
                      <h3 className="pbmit-timeline-title">Research</h3>
                      <p className="pbmit-timeline-desc">
                        We are master of Research &amp; innovation idea.
                      </p>
                    </div>
                  </div>
                  {/* Slide3 */}
                  <div className="pbmit-timeline-wrapper swiper-slide pbmit-slide-even">
                    <div className="pbmit-same-height steps-media pbmit-feature-image">
                      <img
                        src="https://xinterio-demo.pbminfotech.com/html-demo/images/history/time-line-03.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="steps-dot">
                      <i className="steps-dot-line" />
                      <span className="dot" />
                    </div>
                    <div className="pbmit-same-height steps-content_wrap">
                      <p className="pbmit-timeline-year">2019</p>
                      <h3 className="pbmit-timeline-title">Communication</h3>
                      <p className="pbmit-timeline-desc">
                        We develop the full cycle of project details for
                        clients.
                      </p>
                    </div>
                  </div>
                  {/* Slide4 */}
                  <div className="pbmit-timeline-wrapper swiper-slide">
                    <div className="pbmit-same-height steps-media pbmit-feature-image">
                      <img
                        src="https://xinterio-demo.pbminfotech.com/html-demo/images/history/time-line-04.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="steps-dot">
                      <i className="steps-dot-line" />
                      <span className="dot" />
                    </div>
                    <div className="pbmit-same-height steps-content_wrap">
                      <p className="pbmit-timeline-year">2021</p>
                      <h3 className="pbmit-timeline-title">budget</h3>
                      <p className="pbmit-timeline-desc">
                        The cost of interior decoration is also significant
                        factor.
                      </p>
                    </div>
                  </div>
                  {/* Slide5 */}
                  <div className="pbmit-timeline-wrapper swiper-slide pbmit-slide-even">
                    <div className="pbmit-same-height steps-media pbmit-feature-image">
                      <img
                        src="https://xinterio-demo.pbminfotech.com/html-demo/images/history/time-line-05.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="steps-dot">
                      <i className="steps-dot-line" />
                      <span className="dot" />
                    </div>
                    <div className="pbmit-same-height steps-content_wrap">
                      <p className="pbmit-timeline-year">2022</p>
                      <h3 className="pbmit-timeline-title">Social Media</h3>
                      <p className="pbmit-timeline-desc">
                        We do all types of the interior designing, decoration
                        &amp; furnishing.
                      </p>
                    </div>
                  </div>
                  {/* Slide6 */}
                  <div className="pbmit-timeline-wrapper swiper-slide">
                    <div className="pbmit-same-height steps-media pbmit-feature-image">
                      <img
                        src="https://xinterio-demo.pbminfotech.com/html-demo/images/history/time-line-06.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="steps-dot">
                      <i className="steps-dot-line" />
                      <span className="dot" />
                    </div>
                    <div className="pbmit-same-height steps-content_wrap">
                      <p className="pbmit-timeline-year">2023</p>
                      <h3 className="pbmit-timeline-title">Result</h3>
                      <p className="pbmit-timeline-desc">
                        Our creative 3D artists are always ready to translate
                        your designs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="rooms1  bg-gray"
          data-scroll-index={1}
          style={{ paddingBottom: "70px", paddingTop: "70px" }}
        >
          <div className="container">
            <div className="row text-center">
              <div className="welcome-content text-center">
                <h1
                  className="uppercase-white"
                  style={{ textTransform: "uppercase", color: "#fff" }}
                >
                  CUSTOMER REVIEWS
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="item">
                  <div className="position-re o-hidden">
                    <video
                      muted
                      autoPlay
                      controls
                      loop
                      controlsList="nodownload"
                      style={{ width: "100%" }}
                    >
                      <source src="https://res.cloudinary.com/dtlazsqas/video/upload/v1748264238/WhatsApp_Video_2025-05-26_at_18.24.15_3827cabe_smysue.mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="item">
                  <div className="position-re o-hidden">
                    <video
                      muted
                      autoPlay
                      controls
                      loop
                      controlsList="nodownload"
                      style={{ width: "100%" }}
                    >
                      <source src="https://res.cloudinary.com/dtlazsqas/video/upload/v1748264237/WhatsApp_Video_2025-05-26_at_18.24.16_8709949a_dv3l2r.mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="item">
                  <div className="position-re o-hidden">
                    <video
                      muted
                      autoPlay
                      controls
                      loop
                      controlsList="nodownload"
                      style={{ width: "100%" }}
                    >
                      <source src="https://res.cloudinary.com/dtlazsqas/video/upload/v1748264237/WhatsApp_Video_2025-05-26_at_18.24.14_08379862_mqst6o.mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="item">
                  <div className="position-re o-hidden">
                    <video
                      muted
                      autoPlay
                      controls
                      loop
                      controlsList="nodownload"
                      style={{ width: "100%" }}
                    >
                      <source src="https://res.cloudinary.com/dtlazsqas/video/upload/v1748264237/WhatsApp_Video_2025-05-26_at_18.24.10_fb146684_wdtlcd.mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BlogFeaturedThree spaceTopClass="pt-70" spaceBottomClass="pb-70" />
      </LayoutEight>
    </Fragment>
  );
};

export default HomeFurnitureSix;
