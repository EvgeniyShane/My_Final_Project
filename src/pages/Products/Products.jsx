import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import "@/styles/Products.css";
import { Link } from "react-router-dom";
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('/backend/db.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      <Navbar />
      <h1>Products</h1>
      {products ? (
        products.map((product) => {
          return (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div className="card">
                <img src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.category}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Products;