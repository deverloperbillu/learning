'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'; // Correct import name
import axios from 'axios';

export default function Products() {
  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <div className='main_products grid grid-cols-3 gap-4 mt-12 w-full'>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <Image 
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                style={{ objectFit: 'cover' }}
                priority={false}
              />
            </div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}