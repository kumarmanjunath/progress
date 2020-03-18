import React from "react";

function Product(props) {
  const typography = {
    textAlign: "center"
  };

  return (
    <div style={typography}>
      <img src={props.product.imgUrl} alt='Product' />
      <p>{props.product.productName}</p>
      <h6>{props.product.about}</h6>
      <h6>{props.product.expierence} Expierence</h6>
      <button type='button' class='btn btn-danger'>
        Connect
      </button>
    </div>
  );
}

export default Product;
