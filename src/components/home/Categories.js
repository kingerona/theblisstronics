import { nanoid } from "nanoid"
import SingleCategory from "./SingleCategory"

export default function Categories() {
    const allCategories = [
        {
            name: "Asus",
            bgImage: "img/categories/cat-1.jpg",
            link: "example.com"
        }, 
        {
            name: "Del",
            bgImage: "img/categories/cat-2.jpg",
            link: "example.com"
        },
        {
            name: "Gigabyte",
            bgImage: "img/categories/cat-3.jpg",
            link: "example.com"
        },
        {
            name: "Intel",
            bgImage: "img/categories/cat-4.jpg",
            link: "example.com"
        },
        {
            name: "Samsung",
            bgImage: "img/categories/cat-5.jpg",
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