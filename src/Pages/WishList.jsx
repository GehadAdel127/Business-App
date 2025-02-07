import React from "react";
import HelloImage from '../Components/HelloImage';
import { useWishlist } from "./Context/WhishlistProvider";

const Wishlist = () => {
    const { wishlist, toggleWishlist } = useWishlist();

    const calculateFinalPrice = (product) => {
        return product.price - (product.discount || 0);
    };

    return (
        <div className="wishlist">
            <HelloImage text="Wishlist" />
            {wishlist.length === 0 ? (
                <h2 style={{ height: '100vh', textAlign: 'center' }}>Your wishlist is empty.</h2>
            ) : (
                <div className="productCards">
                    {wishlist.map((product, index) => {
                        return (
                            <div className="productCard" key={index}>
                                <img src={product.image} alt={product.name} />
                                <div className="close" onClick={() => toggleWishlist(product)}>
                                    <span className="material-icons-outlined">
                                        close
                                    </span>
                                </div>
                                <div className="price">
                                    ${calculateFinalPrice(product)}
                                    {product.discount > 0 ? <div className="priceWithDiscount">${product.price}</div> : null}
                                </div>
                                {product.discount > 0 ? <div className="discount">{product.discount}%</div> : null}
                                <h3>{product.name}</h3>
                                <div className="btn">
                                    <button>
                                        <span className="material-icons-outlined">
                                            shopping_cart
                                        </span> Add to cart
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
