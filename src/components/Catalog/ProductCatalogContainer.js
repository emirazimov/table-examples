import React from "react";
import { connect } from "react-redux";
import ProductCatalog from "./ProductCatalog";

// const changeCatalogActionCreator = (text) => {
//   return {
//     type: "CHANGE-CATALOG",
//     payload: text,
//   };
// };

const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateInputValue: () => {
      // dispatch(changeCatalogActionCreator(text));
    },
  };
};

const ProductCatalogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCatalog);

export default ProductCatalogContainer;
