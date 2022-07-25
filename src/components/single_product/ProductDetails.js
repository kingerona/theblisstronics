import { nanoid } from "nanoid"

export default function ProductDetails() {
    const product = {
        name: "Ventus X Mouse",
        price: 5000,
        featImg: "img/product/details/product-details-1.jpg",
        thumbs: [
            "img/product/details/thumb-1.jpg",
            "img/product/details/thumb-2.jpg",
            "img/product/details/thumb-3.jpg",
            "img/product/details/thumb-4.jpg"
        ],
        rating: 4.5,
        reviewCount: 18,
        productSummary: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
        isAvailable: true,
        shippingTime: "1 day",
        shippingOffer: "Free pickup today",
        weight: "0.5 kg",
        productDesc:
            <>
                <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>      
                <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
            </>,
        productInfo: "Product information goes here (if any)",
        productReviews: [
            "Good Product!",
            "Can't expect better than this.",
            "Recommended 100%"
        ]
    }

    const thumbs = product.thumbs.map(thumb => {
        return (
            <img 
                key={nanoid()}
                data-imgbigurl={thumb}
                src={thumb} alt=""
            />
        )
    })

    function stars(rating) {
        const decimal = rating - Math.floor(rating)
        let ratingEl = []
        for (let i =0; i < Math.floor(rating); i++) {
            ratingEl.push( <i key={nanoid()} className="fa fa-star"></i>)
        }
        if (decimal) {
            ratingEl.push( <i key={nanoid()} className="fa fa-star-half-o"></i>)
        }
        return ratingEl
    }

    const reviewsEl = product.productReviews.map(review => {
        return (
            <li key={nanoid()}><blockquote>{review}</blockquote></li>
        )
    })

    return (
        <section className="product-details spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__pic">
                            <div className="product__details__pic__item">
                                <img className="product__details__pic__item--large"
                                    src={product.featImg} alt=""/>
                            </div>
                            <div className="product__details__pic__slider owl-carousel">
                                {thumbs}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__text">
                            <h3>{thumbs.name}</h3>
                            <div className="product__details__rating">
                                {stars(product.rating)}
                                <span>({product.reviewCount} reviews)</span>
                            </div>
                            <div className="product__details__price">Tk {product.price}</div>
                            <p>{product.productSummary}</p>
                            <div className="product__details__quantity">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="text" value="1" readOnly />
                                    </div>
                                </div>
                            </div>
                            <a href="example.com" className="primary-btn">ADD TO CART</a>
                            <a href="example.com" className="heart-icon"><span className="icon_heart_alt"></span></a>
                            <ul>
                                <li><b>Availability</b> <span>{product.isAvailable && "In Stock"}</span></li>
                                <li><b>Shipping</b> <span>{product.shippingTime} shipping. <samp>{product.shippingOffer}</samp></span></li>
                                <li><b>Weight</b> <span>{product.weight}</span></li>
                                <li><b>Share on</b>
                                    <div className="share">
                                        <a href="example.com"><i className="fa fa-facebook"></i></a>
                                        <a href="example.com"><i className="fa fa-twitter"></i></a>
                                        <a href="example.com"><i className="fa fa-instagram"></i></a>
                                        <a href="example.com"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                        aria-selected="true">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                        aria-selected="false">Information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                        aria-selected="false">Reviews <span>({product.productReviews.length})</span></a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Description</h6>
                                        {product.productDesc}
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-2" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        {product.productInfo}
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Reviews</h6>
                                        {reviewsEl}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}