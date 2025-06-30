import PropTypes from "prop-types";
import clsx from "clsx"
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductSliderFive from "./ProductSliderFive";

const TabProductTwenty = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  productTabClass,
  productGridStyleClass
}) => {
  return (
    <div className={clsx("product-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <Tab.Container defaultActiveKey="Decorative">
          <Nav variant="pills"  className={`product-tab-list-7 justify-content-center mb-30 ${
              productTabClass ? productTabClass : ""  }`}  >

            <Nav.Item>
              <Nav.Link eventKey="Decorative">
                <h4>Decorative Laminates</h4>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="PVC">
                <h4>PVC Laminates</h4>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="Acrylic">
                <h4>Acrylic Laminate</h4>
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link eventKey="Liner">
                <h4>Liner Laminates</h4>
              </Nav.Link>
            </Nav.Item>



          </Nav>
          <Tab.Content>

            <Tab.Pane eventKey="PVC">
              <ProductSliderFive
                category={"PVC Laminates"}
                type="new"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="Acrylic">
              <ProductSliderFive
                category={"Acrylic Laminates"}
                type="new"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>


            <Tab.Pane eventKey="Liner">
              <ProductSliderFive
                category={"Liner Laminates"}
                type="new"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>

             <Tab.Pane eventKey="Decorative">
              <ProductSliderFive
                category={"Decorative Laminates"}
                type="new"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>

          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProductTwenty.propTypes = {
  category: PropTypes.string,
  productTabClass: PropTypes.string,
  productGridStyleClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductTwenty;
