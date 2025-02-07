import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';

const ProductCard = ({ product, toggleWishlist, isInWishlist, addToCart }) => {
    const calculateFinalPrice = useCallback(
        (packageItem) => (packageItem.price - (packageItem.discount * packageItem.price) / 100).toFixed(2),
        []
    );

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        toggleWishlist(product);
    };

    return (
        <div className="productCard">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
            </Link>
            <div className="price">
                ${calculateFinalPrice(product)}
                {product.discount > 0 && (
                    <div className="priceWithDiscount">${product.price}</div>
                )}
            </div>
            {product.discount > 0 && (
                <div className="discount">{product.discount}%</div>
            )}
            <div className="react">
                <span
                    className="material-icons-outlined"
                    onClick={handleFavoriteClick}
                    style={{ color: isInWishlist ? 'white' : 'white', cursor: 'pointer' }}
                >
                    {isInWishlist ? 'favorite' : 'favorite_border'}
                </span>
            </div>
            <h3>{product.name}</h3>
            <div className="btn">
                <button onClick={() => addToCart(product)}>
                    <span className="material-icons-outlined">shopping_cart</span> Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
