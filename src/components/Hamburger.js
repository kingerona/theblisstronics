export default function Hamburger() {
    return (
        <div>
            <div className="humberger__menu__overlay"></div>
            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <a href="example.com"><img src="img/logo.png" alt="" /></a>
                </div>
                <div className="humberger__menu__cart">
                    <ul>
                        <li><a href="example.com"><i className="fa fa-heart"></i> <span>1</span></a></li>
                        <li><a href="example.com"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                    </ul>
                    <div className="header__cart__price">item: <span>Tk 150.00</span></div>
                </div>
                <div className="humberger__menu__widget">
                    {/* <!-- <div className="header__top__right__language">
                        <img src="img/language.png" alt="">
                        <div>English</div>
                        <span className="arrow_carrot-down"></span>
                        <ul>
                            <li><a href="example.com">Spanis</a></li>
                            <li><a href="example.com">English</a></li>
                        </ul>
                    </div> --> */}
                    <div className="header__top__right__auth">
                        <a href="example.com"><i className="fa fa-user"></i> Login</a>
                    </div>
                </div>
                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li className="active"><a href="./index.html">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="example.com">Pages</a>
                            <ul className="header__menu__dropdown">
                                <li><a href="/product">Single Product</a></li>
                                <li><a href="/cart">Shoping Cart</a></li>
                                <li><a href="/checkout">Check Out</a></li>
                                {/* <!-- <li><a href="./blog-details.html">Blog Details</a></li> --> */}
                            </ul>
                        </li>
                        {/* <!-- <li><a href="./blog.html">Blog</a></li> --> */}
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
                <div className="header__top__right__social">
                    <a href="example.com"><i className="fa fa-facebook"></i></a>
                    <a href="example.com"><i className="fa fa-twitter"></i></a>
                    <a href="example.com"><i className="fa fa-linkedin"></i></a>
                    <a href="example.com"><i className="fa fa-pinterest-p"></i></a>
                </div>
                <div className="humberger__menu__contact">
                    <ul>
                        <li><i className="fa fa-envelope"></i> hello@theblisstronics.com</li>
                        <li>Free Shipping for all Order of Tk 99</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}