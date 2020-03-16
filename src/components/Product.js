import React from "react";

function Product(props) {
  const typography = {
    textAlign: "center"
  };

  return (
    <div style={typography}>
      <img src={props.product.imgUrl} alt='Product' />
      <h1>{props.product.productName}</h1>
      <h3>{props.product.about}</h3>
      <h4>{props.product.expierence} Expierence</h4>
      <button>Choose Me</button>
    </div>
  );
}

export default Product;
