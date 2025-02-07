import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ScrollToTop from './Components/ScrollToTop';
import About from './Pages/About';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Home from './Pages/Home';
import LostPassword from './Pages/LostPassword';
import MyAccount from './Pages/MyAccount';
import ProductPage from './Pages/ProductPage';
import ProjectPage from './Pages/ProjectPage';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Shop from './Pages/Shop';
import Wishlist from './Pages/WishList';
// import { WishlistProvider } from './Pages/WishList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/myaccount' element={<MyAccount />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path='/lostpassword' element={<LostPassword />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path='/wishlist' element = {<Wishlist/>} />
          <Route path="/product/:productId" element={<ProductPage/>} />
          <Route path='/checkout' element = {<Checkout/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
