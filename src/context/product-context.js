import React, { useState } from "react";

const ProductContext = React.createContext({
  productsList: [],
  product: {},
});

export const ProductProvider = (props) => {
  const [productsList, setProductsList] = useState([]);
  const [product, setProduct] = useState({});

  return (
    <ProductContext.Provider
      value={{
        products: productsList,
        product: product,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
