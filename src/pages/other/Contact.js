import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/contactBreadcrumb";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO titleTemplate="Contact" description="Contact" />

      <LayoutOne headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Contact", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        <section className="ttm-row res-991-pt-45 pb-70 pt-70 res-991-pb-0 clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="featured-icon-box icon-align-top-content style7">
                  <div className="featured-inner">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md ttm-icon_element-style-square">
                        <i className="fa fa-solid fa-location-dot" />
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>Head Office</h3>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Skydecor Laminates Pvt. Ltd. <br />
                          Riana Perito <br />
                          2nd floor, plot No.59, sector 136 <br />
                          Noida,Uttar Pradesh,India,201301 <br />
                        </p>
                         <a href="/" className="view-btn"> Get Direction  </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="featured-icon-box icon-align-top-content style7">
                  <div className="featured-inner">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md ttm-icon_element-style-square">
                        <i className="fa fa-solid fa-location-dot" />
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>Delhi Depot</h3>
                      </div>
                      <div className="featured-desc">
                        <p>
                          D-64, Khasra No. 73/22/2 <br />
                          Swaran Park, Near Rajdhani park metro station, <br />{" "}
                          Opp. Metro Pillar No.470 Mundka,New Delhi,India,110041{" "}
                          <br />
                        </p>

                       <a href="/" className="view-btn"> Get Direction  </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="featured-icon-box icon-align-top-content style7">
                  <div className="featured-inner">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md ttm-icon_element-style-square">
                        <i className="fa fa-solid fa-location-dot" />
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>Skydecor Experience Center</h3>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Skydecor Experience Center <br />
                          Plot No. 20-21, 2nd Floor <br />
                          Rekha Enclave, Masarover Garden <br />
                          Kirti Nagar,New Delhi,India,110015 <br />
                        </p>
                          <a href="/" className="view-btn"> Get Direction  </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="contact-area pb-70">
          <div className="container">
            <div className="custom-row-2">
              <div className="col-12 col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+012 345 678 102</p>
                      <p>+012 345 678 102</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:yourname@email.com">
                          yourname@email.com
                        </a>
                      </p>
                      <p>
                        <a href="https://yourwebsitename.com">
                          yourwebsitename.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Address goes here, </p>
                      <p>street, Crossroad 123.</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://pinterest.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fa-brands fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://vimeo.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fa-brands fa-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Name*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Email*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Subject*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-area  pb-70">
          <div className="container">
            <div className="contact-map mb-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7012.124286145613!2d77.402238!3d28.507778000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce90289e0bb63%3A0xe1a1fc7223b299e5!2sSKYDECOR%20LAMINATES!5e0!3m2!1sen!2sin!4v1749803285345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Skydecor"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
