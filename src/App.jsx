import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Checkout from './Pages/Checkout'
import Navbar from './Components/Navbar'
import AuthProvider from './Context/AuthContext'
import ProductDetails from './Pages/ProductDetail'
import CartProvider from './Context/CartContext'
import Footer from './Components/Footer'


function App() {
 

  return (
    <CartProvider>
       <AuthProvider>
       <div className="app">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/Auth" element = {<Auth />} />
        <Route path = "/Checkout" element = {<Checkout />} />
         <Route path = "/products/:id" element = {<ProductDetails />} />
      </Routes> 
      <Footer/>
      </div>  
     </AuthProvider>
    </CartProvider>
    
    
  )
}

export default App
