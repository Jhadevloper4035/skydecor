import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryThreeSingle = ({ data }) => {
  return (
    <div className="collection-product">
      <div className="collection-img">
        <Link> <img src={process.env.PUBLIC_URL + data.image} alt="" />  </Link>
      </div>
      <div className="collection-content text-center">
        <span>{data.subtitle}</span>
        <h4>
          <Link to={process.env.PUBLIC_URL + data.link}>{data.title}</Link>
        </h4>
      </div>
    </div>
  );
};

CategoryThreeSingle.propTypes = {
  data: PropTypes.shape({})
};

export default CategoryThreeSingle;
