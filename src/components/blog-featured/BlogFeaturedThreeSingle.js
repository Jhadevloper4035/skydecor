import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogFeaturedThreeSingle = ({ singlePost }) => {
  return (
    <div className="blog-wrap scroll-zoom">
      <div className="blog-img">
        <Link to={process.env.PUBLIC_URL + singlePost.url}>
          <img src={process.env.PUBLIC_URL + singlePost.image} alt="" />
        </Link>
        <div className="blog-category-names blog-category-names--style2">
          {singlePost.category.map((singleCategory, key) => {
            return (
              <span className="red" key={key}>
                {singleCategory}
              </span>
            );
          })}
        </div>
      </div>
      <div className="blog-content-wrap">
        <div className="blog-content blog-content--style2 text-center">
          <h3 style={{ textAlign : "start" , padding : "0px 10px "}}>
            <Link to={process.env.PUBLIC_URL + singlePost.url}>
              {singlePost.title}
            </Link>
          </h3>

          <p style={{ textAlign : "start" , padding : "0px 10px "}}>
            <Link to={process.env.PUBLIC_URL + singlePost.url}>
              {singlePost.text}
            </Link>
          </p>

          <h5 style={{ textAlign : "start" , padding : "0px 10px "}}>
            <Link to={process.env.PUBLIC_URL + singlePost.authorUrl}>
              {singlePost.author}
            </Link>
          </h5>

        </div>
      </div>
    </div>
  );
};

BlogFeaturedThreeSingle.propTypes = {
  singlePost: PropTypes.shape({})
};

export default BlogFeaturedThreeSingle;
