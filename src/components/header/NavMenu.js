import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      )}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>{t("Home")}</Link>
          </li>

          <li>
<<<<<<< HEAD
            <Link to={process.env.PUBLIC_URL + "/about"}>{t("About")}</Link>
=======
            <Link to={process.env.PUBLIC_URL + "/"}>{t("About")}</Link>
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {" "}
              {t("Produts")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
<<<<<<< HEAD
            {/*     <ul className="mega-menu">
=======
            {/* <ul className="mega-menu">
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("shop_layout")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("shop_grid_standard")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                      {t("shop_grid_filter")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                      {t("shop_grid_two_column")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}>
                      {t("shop_grid_no_sidebar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-full-width"}>
                      {t("shop_grid_full_width")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
                    >
                      {t("shop_grid_right_sidebar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-standard"}>
                      {t("shop_list_standard")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-full-width"}>
                      {t("shop_list_full_width")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-two-column"}>
                      {t("shop_list_two_column")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("product_details")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("product_tab_bottom")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-tab-left/1"}>
                      {t("product_tab_left")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-tab-right/1"}>
                      {t("product_tab_right")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-sticky/1"}>
                      {t("product_sticky")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-slider/1"}>
                      {t("product_slider")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/product-fixed-image/1"}
                    >
                      {t("product_fixed_image")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/8"}>
                      {t("product_simple")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("product_variation")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/9"}>
                      {t("product_affiliate")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/banner/banner-12.png"
                        }
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("Events")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>
                  {t("Exhibition & media")}
                </Link>
              </li>

              <li>
<<<<<<< HEAD
                <Link to={process.env.PUBLIC_URL + "/blog"}>{t("Blog")}</Link>
=======
                <Link to={process.env.PUBLIC_URL + "/"}>{t("Blog")}</Link>
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
              </li>
            </ul>
          </li>

          <li>
<<<<<<< HEAD
            <Link to={process.env.PUBLIC_URL + "/career"}>{t("Career ")}</Link>
=======
            <Link to={process.env.PUBLIC_URL + "/"}>{t("Career ")}</Link>
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("Experience Center")}
            </Link>
          </li>

          <li>
<<<<<<< HEAD
            <Link to={process.env.PUBLIC_URL + "/contact"}>{t("contact")}</Link>
=======
            <Link to={process.env.PUBLIC_URL + "/"}>{t("contact")}</Link>
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
