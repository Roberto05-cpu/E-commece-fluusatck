import HeadPage from "./Components/HeadPage"
import Navbar from "./Components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./Components/Footer"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import AllProducts from "./pages/AllProducts"

function App() {

  return (
    <div className="">
      <HeadPage />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/allproducts" element={<AllProducts/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
