import "./Footer.scss"
import { images } from "../../constants"

export default function Footer() {
    return (
        <footer className="footer spad">
          <div className="container">
              <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="footer__about">
                          <div className="footer__about__logo">
                              <a href="./index.html"><img src={images.logo} alt=""/></a>
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
                              <li><a href="example.com">About Us</a></li>
                              <li><a href="example.com">About Our Shop</a></li>
                              <li><a href="example.com">Secure Shopping</a></li>
                              <li><a href="example.com">Delivery infomation</a></li>
                              <li><a href="example.com">Privacy Policy</a></li>
                              <li><a href="example.com">Our Sitemap</a></li>
                          </ul>
                          <ul>
                              <li><a href="example.com">Who We Are</a></li>
                              <li><a href="example.com">Our Services</a></li>
                              <li><a href="example.com">Projects</a></li>
                              <li><a href="example.com">Contact</a></li>
                              <li><a href="example.com">Innovation</a></li>
                              <li><a href="example.com">Testimonials</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                      <div className="footer__widget">
                          <h6>Join Our Newsletter Now</h6>
                          <p>Get E-mail updates about our latest shop and special offers.</p>
                          <form action="example.com">
                              <input type="text" placeholder="Enter your mail"/>
                              <button type="submit" className="site-btn">Subscribe</button>
                          </form>
                          <div className="footer__widget__social">
                              <a href="example.com"><i className="fa fa-facebook"></i></a>
                              <a href="example.com"><i className="fa fa-instagram"></i></a>
                              <a href="example.com"><i className="fa fa-twitter"></i></a>
                              <a href="example.com"><i className="fa fa-pinterest"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <div className="footer__copyright">
                          <div className="footer__copyright__text">
                            <p>
                              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved by <a href="https://theblisstronics.com">theblisstronics</a>
                            </p>
                          </div>
                          <div className="footer__copyright__payment"><img src={images.payment_cards} alt=""/></div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    )
}