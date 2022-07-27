import { nanoid } from "nanoid"
import SingleCategory from "./SingleBrand"

import { images } from "../../constants"

export default function Brands() {
    const allCategories = [
        {
            name: "Asus",
            bgImage: images.brand_1,
            link: "example.com"
        }, 
        {
            name: "Del",
            bgImage: images.brand_2,
            link: "example.com"
        },
        {
            name: "Gigabyte",
            bgImage: images.brand_3,
            link: "example.com"
        },
        {
            name: "Intel",
            bgImage: images.brand_4,
            link: "example.com"
        },
        {
            name: "Samsung",
            bgImage: images.brand_5,
            link: "example.com"
        }
    ]

    const categoriesEl = allCategories.map(category => {
        return (
            <SingleCategory 
                key={nanoid()}
                name={category.name}
                bgImage={category.bgImage}
                link={category.link}
            />
        )
    })

    return (
        <section className="categories">
          <div className="container">
              <div className="row">             
                  <div className="categories__slider owl-carousel">
                      {categoriesEl}
                  </div>
              </div>
          </div>
      </section>
    )
}