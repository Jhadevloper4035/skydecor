import { Fragment, useEffect } from "react";
import $ from "jquery";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";

import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/careerBreadcrumb";
import clsx from "clsx";

const Career = () => {
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

const jobData = [
  {
    location: "India | Bangalore & Mumbai",
    title: "Assistant Manager – Deal Desk [Skydecor ]",
    area: "Sales",
    posted: "Posted 1 week ago",
    description: "Support sales operations by managing deal structures, pricing strategies, and client proposals to maximize revenue efficiency."
  },
  {
    location: "India | Pune",
    title: "Assistant Manager – Project Sales [Skydecor ]",
    area: "Marketing",
    posted: "Posted 2 weeks ago",
    description: "Drive sales for large-scale interior projects by engaging architects, designers, and contractors in the region. The role involves identifying business"

  },
  {
    location: "India | Delhi, Gurgaon & Bangalore",
    title: "Manager – Project Sales [Skydecor ]",
    area: "Operations",
    posted: "Posted 3 weeks ago",
    description: "Lead project-based sales activities, overseeing client accounts, operational delivery, and revenue growth in multiple cities."
  },
  {
    location: "India | Hyderabad",
    title: "Senior Executive – Channel Sales [Skydecor ]",
    area: "Sales",
    posted: "Posted 5 days ago",
    description: "Manage and expand relationships with distributors and retailers to drive channel-based sales performance."
  },
  {
    location: "India | Ahmedabad",
    title: "Regional Manager – Retail Sales [Skydecor ]",
    area: "Retail",
    posted: "Posted 1 month ago",
    description: "Oversee retail operations and sales strategies across the region to boost brand presence and customer engagement."
  },
  {
    location: "India | Kolkata",
    title: "Executive – Business Development [Skydecor ]",
    area: "Business Development",
    posted: "Posted 3 days ago",
    description: "Identify new business opportunities, build client relationships, and contribute to the expansion of market reach."
  },
];



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
            { label: "contact us", path: process.env.PUBLIC_URL + pathname },
          ]}
        />



         <section className="job-listings-section"  >
          <div className="container py-5">
            <div className={clsx("welcome-area")}>
              <div className="container">
                <div className="welcome-content text-center">
                  <h1 style={{ textTransform: "uppercase" }}>Join Our Team</h1>
                </div>
              </div>
            </div>
            <div className="row">
              {jobData.map((job, index) => (
                <div className="col-md-4" key={index}>
                  <div className="job-card">
                    <p className="text-muted">{job.location}</p>
                    <p className="job-title">{job.title}</p>
                    <p>
                      <strong>Business Area :</strong> {job.area}
                    </p>
                    <p>
                      <strong>Description :</strong> {job.description}
                    </p>
                    <small className="text-muted">
                      {job.posted.toUpperCase()}
                    </small>
                    <br />
                    <a href="/" className="view-btn">
                     Apply now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        <section className="pt-0">
          <div className="container">
            <div className={clsx("welcome-area")}>
              <div className="container">
                <div className="welcome-content text-center">
                  <h1 style={{ textTransform: "uppercase" }}>
                    LIFE AT Skydecor
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              {/* 3 columns */}
              <div className="col-md-4 gallery-item">
                <a
                  href="./assets/img/event/1.jpg"
                  title=""
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="./assets/img/event/1.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 gallery-item">
                <a
                  href="./assets/img/event/2.jpg"
                  title=""
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="./assets/img/event/2.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 gallery-item">
                <a
                  href="./assets/img/event/3.jpg"
                  title=""
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="./assets/img/event/3.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              {/* 2 columns */}
              <div className="col-md-4 gallery-item">
                <a
                  href="./assets/img/event/4.jpg"
                  title=""
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="./assets/img/event/4.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                        style={{ height: "281px" }}
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 gallery-item">
                <a
                  href="./assets/img/event/5.jpg"
                  title=""
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="./assets/img/event/5.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              {/* 3 columns */}
              <div className="col-md-4 gallery-item">
                <a
                  href="./assets/img/event/6.jpg"
                  title=""
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="./assets/img/event/6.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

      
      </LayoutOne>
    </Fragment>
  );
};

export default Career;
