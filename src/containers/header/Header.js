import "./Header.scss"
import { images } from "../../constants"

export default function Header() {
    return (
        <header className="header">
          <div className="header__top">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6 col-md-6">
                          <div className="header__top__left">
                              <ul>
                                  <li><i className="fa fa-envelope"></i> hello@theblisstronics.com</li>
                                  <li>Free Shipping for all Order of Tk 99</li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                          <div className="header__top__right">
                              <div className="header__top__right__social">
                                  <a href="example.com"><i className="fa fa-facebook"></i></a>
                                  <a href="example.com"><i className="fa fa-twitter"></i></a>
                                  <a href="example.com"><i className="fa fa-linkedin"></i></a>
                                  <a href="example.com"><i className="fa fa-pinterest-p"></i></a>
                              </div>
                              <div className="header__top__right__auth">
                                  <a href="example.com"><i className="fa fa-user"></i> Login</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-3">
                      <div className="header__logo">
                          <a href="/"><img src={images.logo} alt="" /></a>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <nav className="header__menu">
                          <ul>
                              <li className="active"><a href="/">Home</a></li>
                              <li><a href="/products">Shop</a></li>
                              <li><a href="example.com">Pages</a>
                                  <ul className="header__menu__dropdown">
                                      <li><a href="/products/myproduct">Single Product</a></li>
                                      <li><a href="/cart">Shoping Cart</a></li>
                                      <li><a href="/checkout">Check Out</a></li>
                                  </ul>
                              </li>
                              <li><a href="/contact">Contact</a></li>
                          </ul>
                      </nav>
                  </div>
                  <div className="col-lg-3">
                      <div className="header__cart">
                          <ul>
                              <li><a href="example.com"><i className="fa fa-heart"></i> <span>1</span></a></li>
                              <li><a href="example.com"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                          </ul>
                          <div className="header__cart__price">item: <span>Tk 150.00</span></div>
                      </div>
                  </div>
              </div>
              <div className="humberger__open">
                  <i className="fa fa-bars"></i>
              </div>
          </div>
      </header>
    )
}