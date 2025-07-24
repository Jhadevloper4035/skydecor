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
<<<<<<< HEAD
        <Tab.Container defaultActiveKey="newArrival">
=======
        <Tab.Container defaultActiveKey="Decorative">
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
          <Nav variant="pills"  className={`product-tab-list-7 justify-content-center mb-30 ${
              productTabClass ? productTabClass : ""  }`}  >

            <Nav.Item>
<<<<<<< HEAD
              <Nav.Link eventKey="newArrival">
=======
              <Nav.Link eventKey="Decorative">
                <h4>Decorative Laminates</h4>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="PVC">
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
                <h4>PVC Laminates</h4>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
<<<<<<< HEAD
              <Nav.Link eventKey="bestSeller">
=======
              <Nav.Link eventKey="Acrylic">
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
                <h4>Acrylic Laminate</h4>
              </Nav.Link>
            </Nav.Item>

<<<<<<< HEAD
           


            <Nav.Item>
              <Nav.Link eventKey="newArrival">
=======

            <Nav.Item>
              <Nav.Link eventKey="Liner">
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
                <h4>Liner Laminates</h4>
              </Nav.Link>
            </Nav.Item>

<<<<<<< HEAD
             <Nav.Item>
              <Nav.Link eventKey="saleItems">
                <h4>Decorative Laminates</h4>
              </Nav.Link>
            </Nav.Item>
=======

>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6

          </Nav>
          <Tab.Content>

<<<<<<< HEAD
            <Tab.Pane eventKey="newArrival">
              <ProductSliderFive
                category={"acrylic-laminate"}
=======
            <Tab.Pane eventKey="PVC">
              <ProductSliderFive
                category={"PVC Laminates"}
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
                type="new"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>

<<<<<<< HEAD
            <Tab.Pane eventKey="bestSeller">
              <ProductSliderFive
                category={"pvc-Laminates"}
=======
            <Tab.Pane eventKey="Acrylic">
              <ProductSliderFive
                category={"Acrylic Laminates"}
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
                type="new"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>


<<<<<<< HEAD
            <Tab.Pane eventKey="saleItems">
              <ProductSliderFive
                category={category}
                type="saleItems"
=======
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
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>

<<<<<<< HEAD
            
=======
>>>>>>> 228e1e72807d604040d94904d4644fda909a04a6
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
