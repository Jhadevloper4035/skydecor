import { Fragment, useEffect } from "react";
import clsx from "clsx";
import $ from "jquery";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";

import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/aboutBreadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import CategoryThreeSlider from "../../wrappers/category/CategoryThreeSlider";
const About = () => {

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

  let { pathname } = useLocation();

  return (

    
    <Fragment>
      <SEO
        titleTemplate="About us"
        description="About page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "About us", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        <SectionTitleWithText spaceTopClass="pt-70" />

        <section
          className="services section-padding"
          style={{ paddingBottom: "70px", paddingTop: "70px" }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 p-0 animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              >
                <div className="img left content-end pl">
                  <a href="/">
                    {" "}
                    <img src="./assets/img/page/vision.jpg" alt="" />{" "}
                  </a>
                </div>
              </div>
              <div
                className="col-md-6 p-0 bg-cream valign animate-box content-center fadeInRight animated"
                data-animate-effect="fadeInRight"
              >
                <div className="content">
                  <div className="cont text-left">
                    <h4>VISION</h4>
                    <p>
                      At Skydecor Laminates, we envision becoming a name
                      synonymous with beauty, innovation, and trust in every
                      home and space we touch. Our goal is to be recognized not
                      just as a laminate brand, but as a style partner that
                      transforms interiors with elegance and excellence. We
                      strive to bring globally inspired designs and world-class
                      quality that enrich lifestyles and elevate living
                      experiences.
                    </p>

                    <a href="bespoke-furniture.php" className="view-btn">
                      {" "}
                      <span>Our Collection</span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 bg-cream p-0 order2 valign content-center animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              >
                <div className="content">
                  <div className="cont text-left">
                    <h4>MISSION</h4>
                    <p>
                      Our mission is to achieve global competitiveness and
                      industry leadership by blending international standards
                      with deeply rooted Indian ethics. We are committed to
                      crafting solutions that offer a perfect balance of style,
                      durability, and sustainability. By continuously innovating
                      and embracing responsible manufacturing .
                    </p>

                    <a href="bespoke-furniture.php" className="view-btn">
                      {" "}
                      <span>Our Collection</span>{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 p-0 order1 animate-box fadeInRight animated"
                data-animate-effect="fadeInRight"
              >
                <div className="img pr">
                  <a href="/">
                    <img src="./assets/img/page/mission.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 p-0 animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              >
                <div className="img left content-end pl">
                  <a href="/">
                    <img src="./assets/img/page/core-value.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div
                className="col-md-6 p-0 bg-cream valign content-center  animate-box fadeInRight animated"
                data-animate-effect="fadeInRight"
              >
                <div className="content">
                  <div className="cont text-left">
                    <h4>CORE VALUES</h4>
                    <p>
                      Skydecor is committed to sustainability, responsibility,
                      and design excellence. We use eco-friendly materials and
                      adopt sustainable practices to minimize environmental
                      impact. Our products are crafted to be visually appealing,
                      safe, and environmentally conscious. Integrity, customer
                      satisfaction, and continuous improvement guide our work
                      and define our identity.
                    </p>

                    <a href="bespoke-furniture.php" className="view-btn">
                      {" "}
                      <span>Our Collection</span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FunFactOne
          spaceTopClass="pt-70"
          spaceBottomClass="pb-70"
          bgClass="bg-gray-3"
        />

        <section
          className="section-xl pbmit-element-timeline-style-1"
          style={{ paddingBottom: "70px", paddingTop: "70px" }}
        >
          <div className={clsx("welcome-area")}>
            <div className="container">
              <div className="welcome-content text-center">
                <h1 style={{ textTransform: "uppercase" }}>Skydecor Journey</h1>
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
                      <p className="pbmit-timeline-year">2016</p>
                      <h3 className="pbmit-timeline-title">
                        🚀 Foundation & First Milestone{" "}
                      </h3>
                      <p className="pbmit-timeline-desc">
                        Skydecor Established india’s first PVC laminates
                        manufacturing plant At Greater Noida, UP. With an Annual
                        Production capacity of 6 lakhs Sheets
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
                      <p className="pbmit-timeline-year">2018</p>
                      <h3 className="pbmit-timeline-title">
                        🌱 Sustainability & Growth
                      </h3>
                      <p className="pbmit-timeline-desc">
                        Skydecor’s PVC laminates awarded as India’s first Green
                        Product and increased its annual production capacity
                        upto 15 Lakhs Sheets
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
                      <p className="pbmit-timeline-year">2020</p>
                      <h3 className="pbmit-timeline-title">
                        🏭 Scaling Manufacturing
                      </h3>
                      <p className="pbmit-timeline-desc">
                        Skydecor Established their second plant of Decorative
                        laminates Manufacturing at Hapur, UP
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
                      <p className="pbmit-timeline-year">2022</p>
                      <h3 className="pbmit-timeline-title">
                        ✨ Product Innovation
                      </h3>
                      <p className="pbmit-timeline-desc">
                        Skydecor launched Acrylic Laminates and became India’s
                        first & only company to manufacture all kinds of
                        decorative laminates.
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
                      <p className="pbmit-timeline-year">2024</p>
                      <h3 className="pbmit-timeline-title">
                        🏢 Customer-Centric Design Experience{" "}
                      </h3>
                      <p className="pbmit-timeline-desc">
                        Skydecor opened its first design experience center at
                        Kirti Nagar, New Delhi
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
                      <p className="pbmit-timeline-year">2025</p>
                      <h3 className="pbmit-timeline-title">
                        🌍 Going Global & Expanding Offerings
                      </h3>
                      <p className="pbmit-timeline-desc">
                        Skydecor Proudly announces its global presence Grand
                        opening of their first international warehouse in Dubai.
                        - launch of new product “Soffitto Panels”, Interlock
                        Panels for ceiling and walls. - Opening of 2nd Design
                        Experience Center in Noida
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="breadcrumb-area pt-70 pb-70 bg-gray-3"
          style={{
            backgroundImage: "url('./assets/img/certificate/banner.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container"></div>
        </div>

        <CategoryThreeSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />

        <section className="facilties ">
          <div className="container">
            <div className="row text-center">
              <div className="welcome-content text-center pb-60 ">
                <h1 style={{ textTransform: "uppercase" }}>Why Choose Us?</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 ">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <img src="/assets/img/why/1.png" alt="" />
                  <h5>Flame Retardant Test </h5>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 ">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <img src="/assets/img/why/2.png" alt="" />
                  <h5>Lead Free Test </h5>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 ">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <img src="/assets/img/why/3.png" alt="" />
                  <h5>Quality Control Test </h5>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 ">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <img src="/assets/img/why/4.png" alt="" />
                  <h5>Abrasion Resistant Test </h5>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 ">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <img src="/assets/img/why/5.png" alt="" />
                  <h5> Anti Bacterial Test </h5>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 ">
                <div
                  className="single-facility animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <img src="/assets/img/why/6.png" alt="" />
                  <h5>International Quality Standards </h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TeamMemberOne spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

export default About;
