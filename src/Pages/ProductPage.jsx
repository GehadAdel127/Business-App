import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Components/Comments";
import HelloImage from "../Components/HelloImage";
import Interested from "../Components/Interested";
import ProjectLinks from "../Components/ProjectLinks";
import faq from '../Images/faq.jpg';
import shipping from '../Images/shipping.png';
import { useCart } from "./Context/CartProvider";
import { useWishlist } from "./Context/WhishlistProvider";
import './ProductPage.css';
import shopPackages from './ShopPackages';

const ProductPage = () => {
    const { productId } = useParams();
    const { addToCart } = useCart();
    const { wishlist, toggleWishlist } = useWishlist();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeSection, setActiveSection] = useState('description')
    const product = shopPackages.find((pkg) => pkg.id === parseInt(productId));
    if (!product) {
        return <h2 className="not-found">Product Not Found</h2>;
    }
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    const finalPrice = (product.price - (product.price * product.discount) / 100).toFixed(2);
    const handleActiveSection = (section) => {
        setActiveSection(section)
    }
    return (
        <div className="productPage">
            <HelloImage text={product.name} />
            <div className="productPageContent">
                <div className="productInfo">
                    <div className="productImageSection">
                        <img
                            src={selectedImage || product.images[0]}
                            alt={product.name}
                            className="mainImage"
                        />
                        <div className="thumbnailImages">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => setSelectedImage(img)}
                                    className={`thumbnail ${selectedImage === img || (!selectedImage && index === 0) ? "active" : ""}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="productDetails">
                        <h2>{product.name}</h2>
                        <div className="rating"><span class="material-icons-outlined">star</span> (Customer review)</div>
                        <div className="price">
                            ${finalPrice}
                            {product.discount > 0 && <div className='priceWithDiscount'> ${product.price}</div>}
                        </div>
                        <p>{product.description}</p>
                        <div className="quantitySection">
                            <div className="btn"><button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button></div>
                            <span>{quantity}</span>
                            <div className="btn"><button onClick={() => setQuantity(quantity + 1)}>+</button></div>
                        </div>
                        <div className="react">
                            <div className="btn"><button className="addToCartBtn" onClick={() => addToCart(product)}><span className="material-icons-outlined">shopping_cart</span> Add to cart</button></div>
                            <button onClick={() => toggleWishlist(product)} className="wishlistBtn">
                                <span
                                    className="material-icons-outlined"
                                    style={{ color: isInWishlist ? "white" : "white", fontSize: "24px" }}
                                >
                                    {isInWishlist ? "favorite" : "favorite_border"}
                                </span>
                            </button>
                        </div>
                        <ProjectLinks />
                    </div>
                </div>
                <div className="details">
                    <ul className="titles">
                        <li onClick={() => handleActiveSection("description")} className={activeSection === "description" ? "active" : ""}>Description</li>
                        <li onClick={() => handleActiveSection("information")} className={activeSection === "information" ? "active" : ""}>Information</li>
                        <li onClick={() => handleActiveSection("reviews")} className={activeSection === "reviews" ? "active" : ""}>Reviews</li>
                        <li onClick={() => handleActiveSection("productFaq")} className={activeSection === "productFaq" ? "active" : ""}>FAQ</li>
                        <li onClick={() => handleActiveSection("shipping")} className={activeSection === "shipping" ? "active" : ""}>Shipping & Returns</li>
                    </ul>
                    <div className="paragaraphs">
                        {activeSection === "description" && (
                            <div className="description">
                                <h3>Your Personal Assistant</h3>
                                <p>Welcome to the next generation of assistance with our Future Helper Robot. Engineered with cutting-edge artificial intelligence, this robotic companion serves as your personal assistant, seamlessly integrating into your daily routine to enhance productivity and convenience. Whether you need help with scheduling, organization, or simply a friendly chat, our Future Helper Robot is always at your service, learning from your preferences and adapting to your needs over time.</p>
                                <h3>Effortless Household Management</h3>
                                <p>Say goodbye to mundane chores and hello to newfound freedom with our Future Helper Robot. Equipped with nimble mobility and dexterous manipulators, it effortlessly navigates your home, tackling household tasks with efficiency and precision. From cleaning and tidying to managing smart home devices and even assisting with meal preparation, this robot revolutionizes the way you maintain your living space, leaving you with more time to focus on what truly matters.</p>
                                <h3>Entertainment Hub of Tomorrow</h3>
                                <p>But our Future Helper Robot is more than just a practical assistant—it’s also a gateway to endless entertainment and enrichment. With its intuitive interface and seamless connectivity, it transforms into your personal entertainment hub, streaming music, news, and immersive virtual reality experiences at your command. Whether you’re unwinding after a long day or seeking inspiration for your next adventure, this robot brings entertainment to life in ways you never thought possible</p>
                                <p>Experience the future today with our Future Helper Robot. Embrace a world where technology works for you, empowering you to achieve more, live better, and unlock the full potential of tomorrow.</p>
                            </div>
                        )}
                        {activeSection === "information" && (
                            <div className="information">
                                <h3>Additional information</h3>
                                <div className="weight"><h5>Weight</h5> 7kg</div>
                                <div className="dimensions"><h5>Dimensions</h5> 68 × 64 × 49 cm</div>
                                <div className="productYear"><h5>Product Year</h5> 2025</div>
                                <div className="productManual"><h5>Product Manual</h5> Included in the package</div>
                                <div className="refundable"><h5>Refundable</h5> Up to 14 days</div>
                            </div>
                        )}
                        {activeSection === "reviews" && (
                            <div className="reviews">
                                <h3>Reviews</h3>
                                <Comments />
                            </div>
                        )}
                        {activeSection === "productFaq" && (
                            <div className="productFaq">
                                <h3>FAQ</h3>
                                <div className="content">
                                    <img src={faq} alt="faq" />
                                    <div className="questions">
                                        <h4>What payment methods do you accept?</h4>
                                        <p>We accept various payment methods, including credit/debit cards, PayPal, and bank transfers for your convenience.</p>
                                        <h4>Do you offer international shipping?</h4>
                                        <p>Yes, we offer international shipping to many countries. Please check our shipping information page for details on available destinations and shipping rates.</p>
                                        <h4>How can I track my order?</h4>
                                        <p>Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package's delivery status on our website or through the courier's tracking portal.</p>
                                        <h4>What is your return policy?</h4>
                                        <p>We offer a hassle-free return policy. If you're not satisfied with your purchase for any reason, you can return it within 30 days for a full refund or exchange. Please refer to our returns page for detailed instructions.</p>
                                        <h4>Are your products covered by a warranty?</h4>
                                        <p>Yes, most of our products come with a manufacturer's warranty against defects in materials and workmanship. The duration and terms of the warranty vary by product, so please check the product description or contact our customer support team for specific details</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeSection === "shipping" && (
                            <div className="shipping">
                                <h3>Shipping & Delivery</h3>
                                <div className="content">
                                    <p>All estimated shipping times are in addition to fulfillment times, We offer a next working day delivery for orders placed before 6:30 p.m. Monday to Friday. Orders placed after this will be delivered within two working days. This excludes Saturday, Sunday and holidays. Appointed is not responsible for any customs/duties related to international orders. We are unable to calculate charges prior to your order being delivered, and recommend checking with your local customs office for more information. Shipping fees will not be refunded if you refuse these charges</p>
                                    <div className="mid">
                                        <ul className="info">
                                            <li>Free destination delivery above $100</li>
                                            <li>Europe 1 – 3 days Free</li>
                                            <li>United States 4 – 6 days Free</li>
                                            <li>Asia 3 – 6 days Free</li>
                                            <li>Africa 5 – 7 days Free</li>
                                            <li>Australia 3 – 5 days Free</li>
                                        </ul>
                                        <div className="image">
                                            <img src={shipping} alt="shipping" />
                                        </div>
                                    </div>
                                    <h3>Returns & Refunds</h3>
                                    <p>We have a 14-day return policy, which means you have 14 days after receiving your item to request a return, To be eligible for a return, your item must be in the same condition that you received it, unused, and in its original packaging. You’ll also need the order confirmation, order number, or proof of purchase. We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund too.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Interested />
            </div>
        </div>
    );
};

export default ProductPage;
