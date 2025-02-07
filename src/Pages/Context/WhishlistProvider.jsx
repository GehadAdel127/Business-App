import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist'));
        if (savedWishlist) {
            setWishlist(savedWishlist);
        }
    }, []);
    useEffect(() => {
        if (wishlist.length > 0) {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
    }, [wishlist]);

    const toggleWishlist = (product) => {
        setWishlist((prevWishlist) =>
            prevWishlist.some((item) => item.id === product.id)
                ? prevWishlist.filter((item) => item.id !== product.id)
                : [...prevWishlist, product]
        );
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
export const useWishlist = () => useContext(WishlistContext);
