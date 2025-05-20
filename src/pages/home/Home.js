import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutEight from "../../layouts/LayoutEight";
import HeroSliderThirtyOne from "../../wrappers/hero-slider/slider";
import TabProductTwenty from "../../wrappers/product/TabProductTwenty";
import clsx from "clsx";

const HomeFurnitureSix = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Premium Quality Laminates Design Collections"
        description="Furniture shop home of flone react minimalist eCommerce template."
      />

      <LayoutEight
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerBorderStyle="fluid-border"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderThirtyOne
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          spaceBottomClass="pb-100"
        />



        <div className={clsx("welcome-area")}>
            <div className="container">
              <div className="welcome-content text-center">
                <h1 style={{textTransform : "uppercase"}}> SKYDECOR'S TRENDNG Laminates</h1>
              </div>
            </div>
          </div>

        <TabProductTwenty
          spaceBottomClass="pb-70"
          category="furniture"
          productGridStyleClass="product-wrap-10--style2 product-wrap-10--style2--blue"
        />



<section className="rooms1 section-padding bg-cream" data-scroll-index={1}>
  <div className="container">
    <div className="row text-center">
    <div className="welcome-content text-center">
    <h1 style={{textTransform : "uppercase"}}> SKYDECOR'S TRENDNG Laminates</h1>
    </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <div className="item">
          <div className="position-re o-hidden">
            {" "}
            <img src="assets\img\product\laminates\pvc-laminates.jpg" alt="" />{" "}
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
            <img src="assets\img\product\laminates\decorative-laminates.jpg" alt="" />{" "}
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
            <img src="assets\img\product\laminates\liner-laminates.jpg" alt="" />{" "}
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
            <img src="assets\img\product\laminates\acrylic-laminates.jpg" alt="" />{" "}
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















  <section className="rooms1 section-padding bg-cream" data-scroll-index={1}>
  <div className="container">
  <div className="row text-center">
    <div className="welcome-content text-center">
    <h1 style={{textTransform : "uppercase"}}> CUSTOMER REVIEWS </h1>
    </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <div className="item">
          <div className="position-re o-hidden">
          <iframe width="250" height="420" src="https://www.youtube.com/embed/RuoO85qtPuA" title="A visit to remember!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="item">
          <div className="position-re o-hidden">
          <iframe width="250" height="420" src="https://www.youtube.com/embed/sFjjYVQjNJE" title="Smiles All Around at the Skydecor Experience Center, Kirti Nagar!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="item">
          <div className="position-re o-hidden">
          <iframe width="250" height="420" src="https://www.youtube.com/embed/3F0qirI0PFk" title="Happiness meets design!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="item">
          <div className="position-re o-hidden">
          <iframe width="250" height="420" src="https://www.youtube.com/embed/AjtDae8e-As" title="Another Happy Customer at Skydecor Experience Center, Kirti Nagar!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>




      
       
      </LayoutEight>
    </Fragment>
  );
};

export default HomeFurnitureSix;
