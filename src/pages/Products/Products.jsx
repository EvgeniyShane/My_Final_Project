import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "@/components/Navbar";
import "./Products.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [sortedProducts, setSortedProducts] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("search");
    fetchProducts(searchTerm);
  }, []);

  const fetchProducts = async (searchTerm) => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/games/");
      let data = response.data.results;
      if (searchTerm) {
        const regex = new RegExp(searchTerm, "i");
        data = data.filter((d) => d.title.match(regex));
      }
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const sortProductsAlphabetically = () => {
    const sorted = [...products].sort((a, b) => a.title.localeCompare(b.title));
    setSortedProducts(sorted);
  };

  return (
    <>
      <Navbar />
      <h1>Список игр</h1>
      <button onClick={sortProductsAlphabetically}>Сортировать</button>
      <div className="cards">
        {sortedProducts ? (
          sortedProducts.map((product) => {
            return (
              <div key={product.id} className="card">
                <Link to={`/post?focus=${product.title.replace(/\s/g, "")}`}>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </Link>
              </div>
            );
          })
        ) : products ? (
          products.map((product) => {
            return (
              <div key={product.id} className="card">
                <Link to={`/post?focus=${product.title.replace(/\s/g, "")}`}>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </Link>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Products;
