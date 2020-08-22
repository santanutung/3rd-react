import React from "react";
import "./styles.css";

export default function App() {
  const product = [
    { name: "photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "AdobeXD ", price: "$49.99" },
    { name: "AdobeXD ", price: "$49.99" }
  ];
  const prouductName = product.map((product) => product.name);
  console.log(prouductName);

  return (
    <div className="App">
      <h1>Hello CodeSandbox test</h1>

      <ul>
  
        <li>{prouductName[0]}</li>
      </ul>
      <ul>
        <li>{prouductName[1]}</li>
      </ul>
      <ul>
        <li>{prouductName[2]}</li>
      </ul>

      {/* by loop  */}
      <ul>
        {product.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>

      {/* by loop  */}
      {product.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
}
function Product(pops) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    height: "200px",
    width: "200px",
    backgroundColor: "lightgray"
  };

  const { name, price } = pops.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1> {price}</h1>
      <button>Buy now</button>
    </div>
  );
}
