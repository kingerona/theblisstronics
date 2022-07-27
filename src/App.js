import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home, Shop, SingleProduct, Cart, Checkout, Contact, ErrorPage } from "./pages"
import { Header, Hero, HeroHome, Footer} from "./containers"
import { Hamburger, Breadcrumb } from "./components"

import "./App.scss"
import "./index.css"


const externalJS = "js/main.js"
const script = document.createElement("script");
script.src = externalJS;  
document.body.append(script)


function App() {
  return (
    <main>
        <Hamburger />
        <Header />
        {
          window.location.pathname === "/" ?
            <HeroHome /> :
            <>
              <Hero />
              <Breadcrumb />
            </>
        }
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
