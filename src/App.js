import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import  Auth from './pages/Auth'
// import HomePage from "./pages_1/HomePage";
// import LoginPage from "./pages_1/LoginPage";
// import RegisterPage from "./pages_1/RegisterPage";


import Product from './pages/Product'
import Products from './pages/Products'
import NavComponent from './components/NavComponent'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'

import Footer from './components/Footer'

import 'swiper/css/bundle'
import { ShopProvider } from './contexts/ShopContext'
import { WishProvider } from './contexts/WishContext'
// react toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Styles must use direct files imports
// import 'swiper/swiper.scss' // core Swiper
// import 'swiper/modules/navigation/navigation.scss' // Navigation module
// import 'swiper/modules/pagination/pagination.scss' // Pagination module
function App() {
  const [showCart, setShowCart] = useState(false)
  const [showWish, setShowWish] = useState(false)
  // const [showAuth, setShowAuth] = useState(false)

  return (
    <ShopProvider>
      <WishProvider>
        <BrowserRouter>
          <NavComponent
            showCart={showCart}
            setShowCart={setShowCart}
            showWish={showWish}
            setShowWish={setShowWish}
            // showAuth={showAuth}
            // setShowAuth={setShowAuth}
          />
          {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
          {showWish && (
            <Wishlist showWish={showWish} setShowWish={setShowWish} />
          )}
          {/* {showAuth && 
              <Auth showAuth= {showAuth} setShowAuth={setShowAuth} />
          }  /> */}
          {/* <Routes >
            <Route path = '/' element= {<HomePage />} />
            <Route path = '/login' element= {<LoginPage />} />
            <Route path = '/register' element= {<RegisterPage />} />
          </Routes> */}
          <Routes>
            <Route path='/auth' element= {<Auth/>} />
          </Routes>

          <Routes>
            <Route path='/auth' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productType' element={<Product />} />
            {/* <Route path='/products/:productGender' element={<Product />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
        <ToastContainer />
      </WishProvider>
    </ShopProvider>
  )
}

export default App
// /:productGender