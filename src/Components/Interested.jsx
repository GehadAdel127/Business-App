import React from 'react';
import product1 from '../Images/package1-1-600x600.jpg';
import product2 from '../Images/package2-1-600x600.jpg';
import { useCart } from '../Pages/Context/CartProvider';

const Interested = () => {
    const relatedProducts = [
        { id: 1, name: "Basic Starter Kit", rating: 4.2, price: 50, discount: 0, image: product1 },
        { id: 2, name: "Premium Tech Bundle", rating: 4.8, price: 120, discount: 15, image: product2 },
    ];
    const { addToCart } = useCart();
    const handleAddRelatedProduct = (product) => {
        addToCart({ ...product, quantity: 1 });
    };
    return (
        <div className="interested">
            <div className="head">
                <h3>You may interested in</h3>
            </div>
            <div className="productCards">
                {relatedProducts.map((product) => {
                    return (
                        <div className="productCard" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="price">
                                {product.price}
                                {product.discount > 0 ? <div className="priceWithDiscount">${product.price}</div> : null}
                            </div>
                            {product.discount > 0 ? <div className="discount">{product.discount}%</div> : null}
                            <h3>{product.name}</h3>
                            <div className="btn">
                                <button onClick={() => handleAddRelatedProduct(product)}>
                                    <span className="material-icons-outlined">shopping_cart</span> Add to cart
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Interested