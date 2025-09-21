import React from 'react';
import useFetchData from '../hooks/useFetchData';
import '../App.css';

export default function Products() {
    const { data: products, loading, error } = useFetchData(
        "https://fakestoreapi.com/products"
    );

    if (loading) return <p className="loading-error">Loading products...</p>;
    if (error) return <p className="loading-error">Error: {error}</p>;

    return (
        <div className="product-container">
            <h2 className="product-heading">Products</h2>
            <ul className="product-list">
                {products.map((product) => (
                    <li key={product.id} className="product-card">
                        <p className="product-title">{product.title}</p>
                        <span className="product-price">${product.price}</span>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-image"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
