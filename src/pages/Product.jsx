import Navbar from "@/components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import "@/styles/Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(null);

  const fethProducts = async () => {
    const res = await axios.get("http://localhost:3000/products");
    setProducts(res.data);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <h1>Products</h1>
      <button onClick={fethProducts}>Fetch Products</button>
      {products ? (
        products.map((product) => {
          return (
            <Link to={`/products/${product.id}`}>
              <div key={product.id} className="card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
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