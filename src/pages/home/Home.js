import React, { Fragment } from "react";
import clsx from "clsx";
import SEO from "../../components/seo";
import BlogFeaturedThree from "../../wrappers/blog-featured/BlogFeaturedThree";
import LayoutEight from "../../layouts/LayoutEight";
import HeroSliderThirtyOne from "../../wrappers/hero-slider/HeroSliderTen";
import TabProductTwenty from "../../wrappers/product/TabProductTwenty";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";

const HomeFurnitureSix = () => {
 

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
                data-animate-effect="fadeInUp">
                <div className="skydecor-section-title " style={{ marginBottom: 24 }}>
                  The TOTAL LIVING CONCEPT
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
