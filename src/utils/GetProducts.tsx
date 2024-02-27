import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import "./GetProducts.css"

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

export function GetProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    try {
      const resp: AxiosResponse<{ products: Product[] }> = await axios.get(
        "http://localhost:3000/product?categoryName=სმარტფონები"
      );

      if (Array.isArray(resp.data.products)) {
        setProducts(resp.data.products);
      } else {
        console.error("Error: Response data is not an array");
      }
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
    </div>
  );
}



