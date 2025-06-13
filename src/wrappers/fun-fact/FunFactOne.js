import PropTypes from "prop-types";
import clsx from "clsx";
import funFactData from "../../data/fun-fact/fun-fact-one.json";
import FunFactOneSingle from "../../components/fun-fact/FunFactOneSingle.js";

const FunFactOne = ({ spaceTopClass, spaceBottomClass, bgClass }) => {
  return (
    <div
      className={clsx("funfact-area", spaceTopClass, spaceBottomClass, bgClass)}
      style={{
        backgroundImage: "url('./assets/img/banner/funfact.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="row text-center">
          <div className="welcome-content text-center pb-60 ">
            <h1 className="text-white" style={{ textTransform: "uppercase" }}>
              How We Earned Trust
            </h1>
          </div>
        </div>
        <div className="row">
          {funFactData?.map((single, key) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
              <FunFactOneSingle
                data={single}
                spaceBottomClass="mb-30"
                textAlignClass="text-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FunFactOne.propTypes = {
  bgClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default FunFactOne;
