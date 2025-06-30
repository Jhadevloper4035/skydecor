import PropTypes from "prop-types";
import clsx from "clsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HeaderTop = ({ borderStyle }) => {

  return (
    <div
      className={clsx(
        "header-top-wap",
        borderStyle === "fluid-border" && "border-bottom"
      )}
      style={{
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 40px",
        flexWrap: "wrap",
      }}
    >
      {/* Social Media Icons */}
      <div className="social-icons" style={{ display: "flex", gap: "15px" }}>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-youtube"
            style={{ color: "#fff",  fontSize: "12px" }}
          ></i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-facebook"
            style={{ color: "#fff",  fontSize: "12px" }}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-linkedin"
            style={{ color: "#fff",  fontSize: "12px" }}
          ></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-twitter"
            style={{ color: "#fff",  fontSize: "12px" }}
          ></i>
        </a>
      </div>

      {/* Offer Section */}
      <div className="header-offer">
        <p  style={{ color: "#fff",  fontSize: "12px" }} >
         <i class="fa-solid fa-phone" style={{ color: "#fff",  fontSize: "14px" }} ></i> &nbsp;  Call Us : <span>+222-1800-2628</span>
        </p>
      </div>

      {/* <div className="header-offer">
        <p>
          <a
            href="mailto:info@example.com"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "12px"
            }}
          >
            <i className="fas fa-envelope"></i> info@example.com
          </a>
        </p>
        
      </div> */}

      {/* <div className="header-offer"   style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent : "space-between",
              gap: "20px",
             fontSize: "12px"
            }}>
        <p>
          <a
            href="mailto:info@example.com"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
               textTransform : "uppercase",
               fontSize: "12px"
            }}
          >
         <i class="fa fa-solid fa-clipboard"></i>  E-Catalogue
          </a>
        </p>
        <p>
          <a
            href="mailto:info@example.com"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              textTransform : "uppercase",
               fontSize: "12px"
            }}
          >
          <i class="fa-solid fa-briefcase"></i> Careers
          </a>
        </p>
        <p>
          <a
            href="mailto:info@example.com"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
               textTransform : "uppercase",
               fontSize: "12px"
            }}
          >
          <i class="fa-solid fa-book-open-reader"></i> blogs
          </a>
        </p>
      </div> */}



    </div>


  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
};

export default HeaderTop;