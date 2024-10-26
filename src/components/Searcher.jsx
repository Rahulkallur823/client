import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layouts/Layout';
import { useSearch } from '../store/Search';
import "./searchproduct.css";

// ProductCard Component
const ProductCard = ({ title, price, discountedPrice, discount, rating, images, inStock }) => {
  return (
    <div className="rpc-product-card">
      <div className="rpc-image-gallery">
        {images && images.length > 0 ? (
          <img
            src={images[0].url}
            alt={title}
            className="rpc-image"
          />
        ) : (
          <span className="no-image">No Image</span>
        )}
        {discount > 0 && <span className="rpc-discount-badge">{discount}% OFF</span>}
      </div>
      <div className="rpc-card-content">
        <h3 className="rpc-product-title">{title}</h3>
        <div className="rpc-price-container">
          <span className="rpc-discounted-price">Rs {discountedPrice}</span>
          {price && price !== discountedPrice && (
            <span className="rpc-original-price">Rs {price}</span>
          )}
        </div>
        <div className="rpc-rating">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`rpc-star ${i < Math.floor(rating) ? 'filled' : ''}`}>★</span>
          ))}
        </div>
        <p className="rpc-stock-info">{inStock ? 'In Stock' : 'Out of Stock'}</p>
      </div>
    </div>
  );
};

// Searcher Component
const Searcher = () => {
  const { searchItem } = useSearch();

  return (
    <Layout>
      <div className="container">
        <div className="text-center">
          <h1>{searchItem.result.length < 1 ? 'No products found' : `Found ${searchItem.result.length} products`}</h1>
        </div>

        {/* Product card section */}
        <div className="container">
          <h2 className="my-4">Products</h2>
          {searchItem.result.length > 0 ? (
            <div className="product-grid">
              {searchItem.result.map((p) => (
                <Link key={p._id} to={`/product/${p.slug}`} className="product-link">
                  <ProductCard
                    title={p.name}
                    price={p.originalPrice}
                    discountedPrice={p.discountedPrice}
                    discount={p.discount}
                    rating={p.rating}
                    images={p.images}
                    inStock={p.quantity > 0}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <p className="no-products">No products available</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Searcher;