import { nanoid } from "nanoid"
import { images } from "../../constants"

export default function SaleOff() {
    const disItems = [
        {
            name: "Del Laptop",
            originalPrice: 36,
            salePrice: 30,
            discount: 20,
            department: "laptop",
            bgImage: images.discount_1
        },
        {
            name: "Ventus Mouse",
            originalPrice: 36,
            salePrice: 30,
            discount: 20,
            department: "mouses",
            bgImage: images.discount_2
        },
        {
            name: "hp laptop",
            originalPrice: 36,
            salePrice: 30,
            discount: 20,
            department: "laptop",
            bgImage: images.discount_3
        },
        {
            name: "hp notebook",
            originalPrice: 36,
            salePrice: 30,
            discount: 20,
            department: "notebook",
            bgImage: images.discount_4
        },
        {
            name: "Dareu headphone",
            originalPrice: 36,
            salePrice: 30,
            discount: 20,
            department: "headphones",
            bgImage: images.discount_5
        },
        {
            name: "Samsung Monitor",
            originalPrice: 36,
            salePrice: 30,
            discount: 20,
            department: "monitor",
            bgImage: images.discount_6
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