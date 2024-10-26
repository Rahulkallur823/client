import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import Pagination from "@mui/material/Pagination";
import { Loader2 } from "lucide-react";
import './CategoryProduct.css'; // Ensure you have this CSS file

const CategoryProduct = () => {
  const params = useParams();
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6; // Ensure items per page is set to 6

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug, page]);

  const getProductsByCat = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:7000/api/v1/product/product-category/${params.slug}?page=${page}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      setCategory(data?.category);
      setProducts(data?.products);
      setTotalPages(data?.totalPages || 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Failed to load products. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">Category results found: {products?.length}</h6>

        {loading && <p className="loading-text"><Loader2 /></p>}
        {error && <p className="error-text">{error}</p>}
        {products.length > 0 ? (
          <>
            <div className="product-grid">
              {products.map((p) => (
                <div key={p._id} className="product-item">
                  <Link to={`/product/${p.slug}`} className="product-link">
                    <ProductCard
                      title={p.name}
                      originalPrice={p.price}
                      discountedPrice={p.discountedPrice}
                      discount={p.discount}
                      rating={p.rating}
                      images={p.images}
                      inStock={p.quantity > 0}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
            />
          </>
        ) : (
          !loading && <p className="text-center">No products found.</p>
        )}
      </div>
    </Layout>
  );
};

const ProductCard = ({ title, originalPrice, discountedPrice, discount, rating, images, inStock }) => {
  return (
    <div className="rpc-product-card">
      <div className="rpc-image-gallery">
        {images && images.length > 0 ? (
          <img
            src={images[0].url}
            alt={title}
            className="productImage"
          />
        ) : (
          <span className="no-image">No Image</span>
        )}
        {discount > 0 && (
          <span className="rpc-discount-badge">{discount}% OFF</span>
        )}
      </div>
      <div className="rpc-card-content">
        <h3 className="rpc-product-title">{title}</h3>
        <div className="rpc-price-container">
          <span className="rpc-discounted-price">
            ₹ {discountedPrice}
          </span>
          {originalPrice && (
            <span className="rpc-original-price">
              ₹ {originalPrice}
            </span>
          )}
        </div>
        <p className="rpc-stock-info">{inStock ? 'In Stock' : 'Out of Stock'}</p>
        <div className="rpc-rating">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`rpc-star ${i < Math.floor(rating) ? 'filled' : ''}`}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
