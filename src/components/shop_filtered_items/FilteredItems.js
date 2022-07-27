import { nanoid } from "nanoid"
import { images } from "../../constants"

export default function FilteredItems() {
    const filteredItems = [
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: images.product_1,
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: images.product_2,
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: images.product_3,
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: images.product_4,
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: images.product_5,
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: images.product_6,
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: images.product_7,
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: images.product_8,
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: images.product_9,
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: images.product_10,
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: images.product_11,
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: images.product_12,
            link: "example.com"
        }
    ]

    const filteredItemsEl = filteredItems.map(item => {
        return (
            <div key={nanoid()} className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg={item.bgImage} >
                        <ul className="product__item__pic__hover">
                            <li><a href="example.com"><i className="fa fa-heart"></i></a></li>
                            <li><a href="example.com"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="example.com"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href={item.link}>{item.name}</a></h6>
                        <h5>Tk {item.price}</h5>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
        <div className="filter__item">
            <div className="row">
                <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                        <span>Sort By</span>
                        <select>
                            <option value="0">Default</option>
                            <option value="0">Default</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                        <h6><span>16</span> Products found</h6>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                        <span className="icon_grid-2x2"></span>
                        <span className="icon_ul"></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            {filteredItemsEl}
        </div>
        <div className="product__pagination">
            <a href="example.com">1</a>
            <a href="example.com">2</a>
            <a href="example.com">3</a>
            <a href="example.com"><i className="fa fa-long-arrow-right"></i></a>
        </div>
        </>
    )
}