

function App() {
  
  return (
    <main>
      {/* <!-- Page Preloder --> */}
      

      {/* <!-- Humberger Begin --> */}
      <div className="humberger__menu__overlay"></div>
      <div className="humberger__menu__wrapper">
          <div className="humberger__menu__logo">
              <a href="#"><img src="img/logo.png" alt="" /></a>
          </div>
          <div className="humberger__menu__cart">
              <ul>
                  <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                  <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
              </ul>
              <div className="header__cart__price">item: <span>Tk 150.00</span></div>
          </div>
          <div className="humberger__menu__widget">
              {/* <!-- <div className="header__top__right__language">
                  <img src="img/language.png" alt="">
                  <div>English</div>
                  <span className="arrow_carrot-down"></span>
                  <ul>
                      <li><a href="#">Spanis</a></li>
                      <li><a href="#">English</a></li>
                  </ul>
              </div> --> */}
              <div className="header__top__right__auth">
                  <a href="#"><i className="fa fa-user"></i> Login</a>
              </div>
          </div>
          <nav className="humberger__menu__nav mobile-menu">
              <ul>
                  <li className="active"><a href="./index.html">Home</a></li>
                  <li><a href="./shop-grid.html">Shop</a></li>
                  <li><a href="#">Pages</a>
                      <ul className="header__menu__dropdown">
                          <li><a href="./shop-details.html">Shop Details</a></li>
                          <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                          <li><a href="./checkout.html">Check Out</a></li>
                          {/* <!-- <li><a href="./blog-details.html">Blog Details</a></li> --> */}
                      </ul>
                  </li>
                  {/* <!-- <li><a href="./blog.html">Blog</a></li> --> */}
                  <li><a href="./contact.html">Contact</a></li>
              </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
          <div className="header__top__right__social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="#"><i className="fa fa-pinterest-p"></i></a>
          </div>
          <div className="humberger__menu__contact">
              <ul>
                  <li><i className="fa fa-envelope"></i> hello@theblisstronics.com</li>
                  <li>Free Shipping for all Order of Tk 99</li>
              </ul>
          </div>
      </div>
      {/* <!-- Humberger End --> */}

      {/* <!-- Header Section Begin --> */}
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
                                  <a href="#"><i className="fa fa-facebook"></i></a>
                                  <a href="#"><i className="fa fa-twitter"></i></a>
                                  <a href="#"><i className="fa fa-linkedin"></i></a>
                                  <a href="#"><i className="fa fa-pinterest-p"></i></a>
                              </div>
                              {/* <!-- <div className="header__top__right__language">
                                  <img src="img/language.png" alt="">
                                  <div>English</div>
                                  <span className="arrow_carrot-down"></span>
                                  <ul>
                                      <li><a href="#">Spanis</a></li>
                                      <li><a href="#">English</a></li>
                                  </ul>
                              </div> --> */}
                              <div className="header__top__right__auth">
                                  <a href="#"><i className="fa fa-user"></i> Login</a>
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
                          <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <nav className="header__menu">
                          <ul>
                              <li className="active"><a href="./index.html">Home</a></li>
                              <li><a href="./shop-grid.html">Shop</a></li>
                              <li><a href="#">Pages</a>
                                  <ul className="header__menu__dropdown">
                                      <li><a href="./shop-details.html">Shop Details</a></li>
                                      <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                      <li><a href="./checkout.html">Check Out</a></li>
                                      {/* <!-- <li><a href="./blog-details.html">Blog Details</a></li> --> */}
                                  </ul>
                              </li>
                              {/* <!-- <li><a href="./blog.html">Blog</a></li> --> */}
                              <li><a href="./contact.html">Contact</a></li>
                          </ul>
                      </nav>
                  </div>
                  <div className="col-lg-3">
                      <div className="header__cart">
                          <ul>
                              <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                              <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
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
      {/* <!-- Header Section End --> */}

      {/* <!-- Hero Section Begin --> */}
      <section className="hero">
          <div className="container">
              <div className="row">
                  <div className="col-lg-3">
                      <div className="hero__categories">
                          <div className="hero__categories__all">
                              <i className="fa fa-bars"></i>
                              <span>All departments</span>
                          </div>
                          <ul>
                              <li><a href="#">Computer</a></li>
                              <li><a href="#">Laptops</a></li>
                              <li><a href="#">Computer Accessories</a></li>
                              <li><a href="#">Mouses</a></li>
                              <li><a href="#">Keyboards</a></li>
                              <li><a href="#">iPads</a></li>
                              <li><a href="#">iPhones</a></li>
                              <li><a href="#">Android Phones</a></li>
                              <li><a href="#">Headphones</a></li>
                              <li><a href="#">Mobile Accessories</a></li>
                              <li><a href="#">Fresh Gadgets</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-9">
                      <div className="hero__search">
                          <div className="hero__search__form">
                              <form action="#">
                                  <div className="hero__search__categories">
                                      All Categories
                                      <span className="arrow_carrot-down"></span>
                                  </div>
                                  <input type="text" placeholder="What do yo u need?"/>
                                  <button type="submit" className="site-btn">SEARCH</button>
                              </form>
                          </div>
                          <div className="hero__search__phone">
                              <div className="hero__search__phone__icon">
                                  <i className="fa fa-phone"></i>
                              </div>
                              <div className="hero__search__phone__text">
                                  <h5>+65 11.188.888</h5>
                                  <span>support 24/7 time</span>
                              </div>
                          </div>
                      </div>
                      <div className="hero__item set-bg" data-setbg="img/banner/banner-5.jpg">
                          <div className="hero__text">
                              <span>Latest Techs</span>
                              <h2>Gadgets <br />TOP NOTCh</h2>
                              <p>Free Pickup and Delivery Available</p>
                              <a href="#" className="primary-btn">SHOP NOW</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* <!-- Hero Section End --> */}

      {/* <!-- Categories Section Begin --> */}
      <section className="categories">
          <div className="container">
              <div className="row">
              
                  <div className="categories__slider owl-carousel">
                      <div className="col-lg-3">
                          <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                              <h5><a href="www.example.com">ASUS</a></h5>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                              <h5><a href="#">Del</a></h5>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                              <h5><a href="#">Gigabyte</a></h5>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                              <h5><a href="#">Intel</a></h5>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                              <h5><a href="#">Samsung</a></h5>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* <!-- Categories Section End --> */}

      {/* <!-- Featured Section Begin --> */}
      <section className="featured spad">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="section-title">
                          <h2>Featured Product</h2>
                      </div>
                      <div className="featured__controls">
                          <ul>
                              <li className="active" data-filter="*">All</li>
                              <li data-filter=".mouses">Mouses</li>
                              <li data-filter=".keyboards">Keyboards</li>
                              <li data-filter=".headphones">Headphones</li>
                              <li data-filter=".motherboards">Motherboards</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="row featured__filter">
                  <div className="col-lg-3 col-md-4 col-sm-6 mix mouses keyboards">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">CVentus X</a></h6>
                              <h5>Tk 30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix headphones motherboards">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-2.jpg">
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Ventus X</a></h6>
                              <h5>Tk 30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix headphones keyboards">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-3.jpg">
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Ventus X</a></h6>
                              <h5>Tk 30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix motherboards mouses">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-4.jpg">
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Ventus X</a></h6>
                              <h5>Tk 30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix keyboards headphones">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-5.jpg">
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Ventus X</a></h6>
                              <h5>Tk 30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix mouses motherboards">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-6.jpg">
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Ventus X</a></h6>
                              <h5>Tk 30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix keyboards headphones">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-7.jpg">
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Ventus X</a></h6>
                              <h5>Tk 30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix motherboards headphones">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-8.jpg">
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Ventus X</a></h6>
                              <h5>Tk 30.00</h5>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* <!-- Featured Section End --> */}

      
      {/* <!-- Footer Section Begin --> */}
      <footer className="footer spad">
          <div className="container">
              <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="footer__about">
                          <div className="footer__about__logo">
                              <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                          </div>
                          <ul>
                              <li>Address: Multiplan, Science Lab, Dhaka</li>
                              <li>Phone: +65 11.188.888</li>
                              <li>Email: hello@theblisstronics.com</li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                      <div className="footer__widget">
                          <h6>Useful Links</h6>
                          <ul>
                              <li><a href="#">About Us</a></li>
                              <li><a href="#">About Our Shop</a></li>
                              <li><a href="#">Secure Shopping</a></li>
                              <li><a href="#">Delivery infomation</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                              <li><a href="#">Our Sitemap</a></li>
                          </ul>
                          <ul>
                              <li><a href="#">Who We Are</a></li>
                              <li><a href="#">Our Services</a></li>
                              <li><a href="#">Projects</a></li>
                              <li><a href="#">Contact</a></li>
                              <li><a href="#">Innovation</a></li>
                              <li><a href="#">Testimonials</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                      <div className="footer__widget">
                          <h6>Join Our Newsletter Now</h6>
                          <p>Get E-mail updates about our latest shop and special offers.</p>
                          <form action="#">
                              <input type="text" placeholder="Enter your mail"/>
                              <button type="submit" className="site-btn">Subscribe</button>
                          </form>
                          <div className="footer__widget__social">
                              <a href="#"><i className="fa fa-facebook"></i></a>
                              <a href="#"><i className="fa fa-instagram"></i></a>
                              <a href="#"><i className="fa fa-twitter"></i></a>
                              <a href="#"><i className="fa fa-pinterest"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <div className="footer__copyright">
                          <div className="footer__copyright__text">
                            <p>
                              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved by <a href="https://theblisstronics.com" target="_blank">theblisstronics</a>
                            </p>
                          </div>
                          <div className="footer__copyright__payment"><img src="img/payment-item.png" alt=""/></div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
      
    </ main>
  );
}

export default App;
