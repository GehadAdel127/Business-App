import React from 'react';
import HelloImage from '../Components/HelloImage';
import product1 from '../Images/package1-1-600x600.jpg';
import product2 from '../Images/package2-1-600x600.jpg';
import product3 from '../Images/package3-1-600x600.jpg';
import product4 from '../Images/package4-1-600x600.jpg';
import product5 from '../Images/package5-1-600x600.jpg';
import product6 from '../Images/package6-1-600x600.jpg';
import product7 from '../Images/package7-1-600x600.jpg';
import product8 from '../Images/package8-1-600x600.jpg';
import { useCart } from './Context/CartProvider';
import { useWishlist } from './Context/WhishlistProvider';
import ProductCard from './ProductCard';
import './Shop.css';

const Shop = () => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const shopPackages = [
    { id: 1, name: "Basic Starter Kit", rating: 4.2, price: 50, discount: 0, image: product1 },
    { id: 2, name: "Premium Tech Bundle", rating: 4.8, price: 120, discount: 15, image: product2 },
    { id: 3, name: "Gaming Essentials Pack", rating: 4.5, price: 200, discount: 20, image: product3 },
    { id: 4, name: "Home Office Setup", rating: 4.7, price: 350, discount: 30, image: product4 },
    { id: 5, name: "Photography Pro Kit", rating: 4.3, price: 180, discount: 10, image: product5 },
    { id: 6, name: "Fitness Gear Combo", rating: 4.6, price: 90, discount: 5, image: product6 },
    { id: 7, name: "Smart Home Package", rating: 4.9, price: 400, discount: 50, image: product7 },
    { id: 8, name: "Music Lover's Bundle", rating: 4.4, price: 150, discount: 15, image: product8 }
  ];

  return (
    <div className="shop">
      <HelloImage text="shop" />
      <div className="productCards">
        {shopPackages.map((product) => {
          const isInWishlist = wishlist.some((item) => item.id === product.id);
          return (
            <ProductCard
              key={product.id}
              product={product}
              toggleWishlist={toggleWishlist}
              isInWishlist={isInWishlist}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
