import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/games/')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
      });
  }, []);

  return (
    <>
      <Navbar />
      <h1>Products</h1>
      <div className="cards">
        {products ? (
          products.map((product) => {
            return (
              <div key={product.id} className="card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Products;