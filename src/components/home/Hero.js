import Department from "../Department";

export default function Hero() {
    return (
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
                              <Department />
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-9">
                      <div className="hero__search">
                          <div className="hero__search__form">
                              <form action="example.com">
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
                              <a href="example.com" className="primary-btn">SHOP NOW</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}