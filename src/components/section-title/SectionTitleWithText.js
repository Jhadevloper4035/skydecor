import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Skydecor</h1>
          <p>
           Skydecor embarked on its journey in 2016 with a vision to push beyond limits and redefine excellence. With a vast infrastructure spanning over 5 million sheets annual production and state-of-the-art machinery, we are committed to continuous growth and innovation. Our manufacturing facilities in Greater Noida and Hapur specialize in producing PVC Laminates, Acrylic Laminates, Decorative Laminates and Soffitto Panels. Our operational headquarters is located in Noida, while our Experience Centres in Kirti Nagar & Noida offers a firsthand showcase of our premium products
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default SectionTitleWithText;
