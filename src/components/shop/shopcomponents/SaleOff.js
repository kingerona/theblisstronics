import { nanoid } from "nanoid"

export default function SaleOff() {
    const disItems = [
        {
            name: "Del Laptop",
            originalPrice: 36,
            salePrice: 30,
            discount: 20,
            department: "laptop",
            bgImage: "img/product/discount/pd-1.jpg"
        },
        {
            name: "Ventus Mouse",
            originalPrice: 36,
            salePrice: 30,
            discount: 20,
            department: "mouses",
            bgImage: "img/product/discount/pd-2.jpg"
        },
        {
            name: "hp laptop",
            originalPrice: 36,
            salePrice: 30,
            discount: 20,
            department: "laptop",
            bgImage: "img/product/discount/pd-3.jpg"
        },
        {
            name: "hp notebook",
            originalPrice: 36,
            salePrice: 30,
            discount: 20,
            department: "notebook",
            bgImage: "img/product/discount/pd-4.jpg"
        },
        {
            name: "Dareu headphone",
            originalPrice: 36,
            salePrice: 30,
            discount: 20,
            department: "headphones",
            bgImage: "img/product/discount/pd-5.jpg"
        },
        {
            name: "Samsung Monitor",
            originalPrice: 36,
            salePrice: 30,
            discount: 20,
            department: "monitor",
            bgImage: "img/product/discount/pd-6.jpg"
        }
    ]

    const disItemsEl = disItems.map(item => {
        return (
            <div key={nanoid()} className="col-lg-4">
                <div className="product__discount__item">
                    <div className="product__discount__item__pic set-bg"
                        data-setbg={item.bgImage}>
                        <div className="product__discount__percent">-{item.discount}%</div>
                        <ul className="product__item__pic__hover">
                            <li><a href="example.com"><i className="fa fa-heart"></i></a></li>
                            <li><a href="example.com"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="example.com"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__discount__item__text">
                        <span>{item.department}</span>
                        <h5><a href="example.com">{item.name}</a></h5>
                        <div className="product__item__price">Tk {item.salePrice} <span>Tk {item.originalPrice}</span></div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="product__discount">
            <div className="section-title product__discount__title">
                <h2>Sale Off</h2>
            </div>
            <div className="row">
                <div className="product__discount__slider owl-carousel">
                    {disItemsEl}
                </div>
            </div>
        </div>
    )
}