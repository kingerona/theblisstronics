export default function HeroPages() {
    return (
        <section className="hero hero-normal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="hero__categories__all">
                                <i className="fa fa-bars"></i>
                                <span>All departments</span>
                            </div>
                            <ul>
                                <li><a href="example.com">Computer</a></li>
                                <li><a href="example.com">Laptops</a></li>
                                <li><a href="example.com">Computer Accessories</a></li>
                                <li><a href="example.com">Mouses</a></li>
                                <li><a href="example.com">Keyboards</a></li>
                                <li><a href="example.com">iPads</a></li>
                                <li><a href="example.com">iPhones</a></li>
                                <li><a href="example.com">Android Phones</a></li>
                                <li><a href="example.com">Headphones</a></li>
                                <li><a href="example.com">Mobile Accessories</a></li>
                                <li><a href="example.com">Fresh Gadgets</a></li>
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
                    </div>
                </div>
            </div>
        </section>
    )
}