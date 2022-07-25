import { nanoid } from "nanoid"

export default function FilteredItems() {
    const filteredItems = [
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: "img/product/product-1.jpg",
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: "img/product/product-2.jpg",
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: "img/product/product-3.jpg",
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: "img/product/product-4.jpg",
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: "img/product/product-5.jpg",
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: "img/product/product-6.jpg",
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: "img/product/product-7.jpg",
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: "img/product/product-8.jpg",
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: "img/product/product-9.jpg",
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: "img/product/product-10.jpg",
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: "img/product/product-11.jpg",
            link: "example.com"
        },
        {
            name: "Ventus 1",
            price: 1000,
            bgImage: "img/product/product-12.jpg",
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