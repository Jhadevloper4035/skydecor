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
    },
    {
      location: "India | Pune",
      title: "Assistant Manager – Project Sales [Skydecor ]",
      area: "Marketing",
      posted: "Posted 2 weeks ago",
    },
    {
      location: "India | Delhi, Gurgaon & Bangalore",
      title: "Manager – Project Sales [Skydecor ]",
      area: "Operations",
      posted: "Posted 3 weeks ago",
    },
    {
      location: "India | Hyderabad",
      title: "Senior Executive – Channel Sales [Skydecor ]",
      area: "Sales",
      posted: "Posted 5 days ago",
    },
    {
      location: "India | Ahmedabad",
      title: "Regional Manager – Retail Sales [Skydecor ]",
      area: "Retail",
      posted: "Posted 1 month ago",
    },
    {
      location: "India | Kolkata",
      title: "Executive – Business Development [Skydecor ]",
      area: "Business Development",
      posted: "Posted 3 days ago",
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

        <section
          className="services section-padding"
          style={{ paddingBottom: "70px", paddingTop: "70px" }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 bg-cream p-0 order2 valign content-center animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              >
                <div className="content">
                  <div className="cont text-left">
                    <div className="info">
                      <h6>We’re Hiring </h6>
                    </div>
                    <h4 style={{ textAlign: "start" }}>
                      Be a Part of the Skydecor Family
                    </h4>
                    <p>
                      Skydecor is the first company to start PVC Laminates
                      manufacturing in India. From a humble start, with 32
                      designs in the year 2016. It's been almost a decade now
                      since we have transformed your interior surfaces. Today we
                      are producing over 600 superior quality designer laminates
                      to transform your space into a place of art. We help you
                      create an ambiance of your choice to uplift your mood as
                      you enter an area.
                    </p>

                    <p>
                      nnovation doesn't strike us by accident. we have invested
                      years of dedication and a focused approach, inclined to
                      nurture an environment where inspiration can foster. We
                      invested heavily in R&D activities with dedicated team to
                      establish a culture of improvement. Our initiatives
                      towards improvement have seen tremendous success and
                      pushed us to the forefront of the sec
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 p-0 order1 animate-box fadeInRight animated"
                data-animate-effect="fadeInRight"
              >
                <div className="img pr">
                  <a href="/">
                    <img src="./assets/img/page/employee.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      

        <section className="section-padding">
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

        <section
          className="job-listings-section"
          style={{ paddingBottom: "70px", paddingTop: "70px" }}
        >
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
                    <small className="text-muted">
                      {job.posted.toUpperCase()}
                    </small>
                    <br />
                    <a href="/" className="view-btn">
                      View Job Description
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LayoutOne>
    </Fragment>
  );
};

export default Career;
