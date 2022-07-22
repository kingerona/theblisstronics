export default function Categories() {
    return (
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
                              <h5><a href="example.com">Del</a></h5>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                              <h5><a href="example.com">Gigabyte</a></h5>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                              <h5><a href="example.com">Intel</a></h5>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                              <h5><a href="example.com">Samsung</a></h5>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}