import React from "react";
import Product from "./components/Product";
import productList from "./productList";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: productList
    };
  }

  render() {
    const productItem = productList.map(product => (
      <Product key={product.id} product={product} />
    ));

    return (
      <div className='container'>
        <h1>Mentors</h1>
        <div className='products'>{productItem}</div>
      </div>
    );
  }
}

export default App;
