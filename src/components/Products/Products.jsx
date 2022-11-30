import { Fragment } from "react";
import AvailableProducts from "./AvailableProducts";
import ProductsSummary from "./ProductsSummary";

const Products = (props) => {
  return (
    <Fragment>
      <ProductsSummary />
      <AvailableProducts />
    </Fragment>
  );
};

export default Products;
