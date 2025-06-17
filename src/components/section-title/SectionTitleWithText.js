import PropTypes from "prop-types";
import clsx from "clsx";
import { useState } from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="read-more-section " style={{display : "flex" , justifyContent : "center" , alignContent : "center" , flexDirection : "column"  }}>

      <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
        <div className="container">
          <div className="welcome-content text-center">
            <h1>Welcome To Skydecor</h1>
            <p>
              Skydecor embarked on its journey in 2016 with a vision to push
              beyond limits and redefine excellence. With a vast infrastructure
              spanning over 5 million sheets annual production and
              state-of-the-art machinery, we are committed to continuous growth
              and innovation. Our manufacturing facilities in Greater Noida and
              Hapur specialize in producing PVC Laminates, Acrylic Laminates,
              Decorative Laminates and Soffitto Panels. Our operational
              headquarters is located in Noida, while our Experience Centres in
              Kirti Nagar & Noida offers a firsthand showcase of our premium
              products
            </p>
          </div>
        </div>
      </div>

      {isExpanded && (
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
                    <p>
                      Boasting a legacy of a decade, Skydecor Laminates offers
                      to revitalize the space around you. Our collections offer
                      limitless possibilities for an interior space to look
                      stylish and refined. From solids to textures, from
                      naturals to eternals, our laminates come in a wide variety
                      of designs and patterns. As a socially and environmentally
                      responsible company, Skydecor also prioritizes
                      sustainability in our design practices. We strive to
                      incorporate eco-friendly materials, energy-efficient
                      solutions, and sustainable practices wherever possible,
                      contributing to a greener and more sustainable future.
                    </p>

                    <p>
                      Our team follows a collaborative approach, working closely
                      to ensure smooth project management, timely execution, and
                      impeccable finishing. We believe by developing a large
                      dealer network in India, Skydecor has left its footprints
                      around our country. Our team works with clients to
                      understand their vision, preferences, and requirements,
                      ensuring that each project reflects their individuality
                      and exceeds their expectations. We pay meticulous
                      attention to detail, incorporating the latest design
                      trends, materials, and technologies to create inspiring
                      and functional spaces.
                    </p>

                    <p>
                      Researching and developing a wide range of laminate
                      designs with the utmost quality and at affordable prices
                      has become our key goal for customer satisfaction. Explore
                      Skydecor’s Laminates collection to design your interiors
                      according to your specifics
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
                    <img src="./assets/img/page/about.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <button onClick={toggleCollapse} className="view-btn1">
        {isExpanded ? "Read Less" : "Read More"}
      </button>

    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default SectionTitleWithText;
