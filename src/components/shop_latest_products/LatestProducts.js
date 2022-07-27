import { nanoid } from "nanoid"
import { images } from "../../constants"

export default function LatestProducts() {
    const latestProducts = [
        {
            name: "Ventus 1",
            departments: ["mouses", "keyboards"],
            bgImage: images.lp_1,
            link: "example.com",
            price: 1000
        },
        {
            name: "Ventus 2",
            departments: ["headphone", "motherboards"],
            bgImage: images.lp_2,
            link: "example.com",
            price: 1500
        },
        {
            name: "Ventus 3",
            departments: ["headphones", "keyboards"],
            bgImage: images.lp_3,
            link: "example.com",
            price: 2000
        },
        {
            name: "Ventus 4",
            departments: ["motherboards", "mouses"],
            bgImage: images.lp_1,
            link: "example.com",
            price: 2500
        },
        {
            name: "Ventus 5",
            departments: ["keybaords", "headphones"],
            bgImage: images.lp_2,
            link: "example.com",
            price: 3000
        },
        {
            name: "Ventus 6",
            departments: ["mouses", "motherboards"],
            bgImage: images.lp_3,
            link: "example.com",
            price: 4000
        }
    ]

    function divideIntoChunks(arr, chunkSize) {
        let res = []
        for( let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize)
            res.push(chunk)
        }
        return res
    }

    const latestProductsChunks = divideIntoChunks(latestProducts, 3)

    const latestProductsEl = latestProductsChunks.map(chunk => {
        return (
            <div key={nanoid()} className="latest-prdouct__slider__item">
                {chunk.map(latestProduct => {
                    return (
                        <a key={nanoid()} href={latestProduct.link} className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <img src={latestProduct.bgImage} alt=""/>
                            </div>
                            <div className="latest-product__item__text">
                                <h6>{latestProduct.name}</h6>
                                <span>Tk {latestProduct.price}</span>
                            </div>
                        </a>
                    )
                })}
            </div>
        )
    })

    return (
        <div className="sidebar__item">
            <div className="latest-product__text">
                <h4>Latest Products</h4>
                <div className="latest-product__slider owl-carousel">
                    {latestProductsEl}
                </div>
            </div>
        </div>
    )
}