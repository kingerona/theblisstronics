import Footer from "./components/Footer";
import Hamburger from "./components/Hamburger";
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";


const externalJS = "js/main.js"
const script = document.createElement("script");
script.src = externalJS;  
document.body.append(script)


function App() {
    
  return (
    <main>
        <Hamburger />
        <Header />        
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shop" element={<Shop />} ></Route>
                <Route path="/product" element={<SingleProduct />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
        </Router>    
        <Footer />   
    </ main>
  );
}

export default App;
