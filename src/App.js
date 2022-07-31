import { Routes, Route, Outlet } from "react-router-dom"

import { Home, Shop, SingleProduct, Cart, Checkout, Contact, ErrorPage } from "./pages"
import { Hamburger, Header, Hero, HeroHome, Footer} from "./containers"
import { Breadcrumb } from "./components"

import "./App.scss"
import "./index.css"


const externalJS = "/js/main.js"
const script = document.createElement("script");
script.src = externalJS;  
document.body.append(script)


function App() {
  return (
    <main>
      <Hamburger />
      <Header />

      <Routes>
        <Route path="/" element={<HeroHome />}></Route>
        <Route path="*" element={<Hero />}></Route>
      </Routes>

      <Routes>
        <Route path="/" element={<Outlet/>}></Route>
        <Route path="*" element={<Breadcrumb />}></Route>
      </Routes>

      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />} ></Route>
          <Route path="/products">
            <Route index element={<Shop />}></Route>
            <Route path=":productId" element={<SingleProduct />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
      </Routes>

      <Footer />   
    </ main>
  );
}

export default App;
