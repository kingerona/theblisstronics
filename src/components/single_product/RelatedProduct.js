import { nanoid } from "nanoid"

export default function RelatedProduct() {
    const relatedProducts = [
        {
            name: "Corsair Keyboard",
            price: 5000,
            bgImage: "img/product/product-1.jpg",
            link: "example.com"
        },
        {
            name: "Corsair Keyboard",
            price: 5000,
            bgImage: "img/product/product-2.jpg",
            link: "example.com"
        },
        {
            name: "Corsair Keyboard",
            price: 5000,
            bgImage: "img/product/product-3.jpg",
            link: "example.com"
        },
        {
            name: "Corsair Keyboard",
            price: 5000,
            bgImage: "img/product/product-4.jpg",
            link: "example.com"
        }
    ]

    const relatedProductsEl = relatedProducts.map(product => {
        return (
            <div key={nanoid()} className="col-lg-3 col-md-4 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg={product.bgImage}>
                        <ul className="product__item__pic__hover">
                            <li><a href="example.com"><i className="fa fa-heart"></i></a></li>
                            <li><a href="example.com"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="example.com"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href={product.link}>{product.name}</a></h6>
                        <h5>Tk {product.price}</h5>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className="related-product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title related__product__title">
                            <h2>Related Product</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {relatedProductsEl}
                </div>
            </div>
        </section>
    )
}