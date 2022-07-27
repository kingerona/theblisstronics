import TabItem from "./TabItem"
import { nanoid } from "nanoid"

import { images } from "../../constants"

export default function Featured() {
    const items = [
        {
            name: "Ventus 1",
            departments: ["mouses", "keyboards"],
            bgImage: images.feature_1,
            link: "example.com",
            price: 1000
        },
        {
            name: "Ventus 2",
            departments: ["headphone", "motherboards"],
            bgImage: images.feature_2,
            link: "example.com",
            price: 1500
        },
        {
            name: "Ventus 3",
            departments: ["headphones", "keyboards"],
            bgImage: images.feature_3,
            link: "example.com",
            price: 2000
        },
        {
            name: "Ventus 4",
            departments: ["motherboards", "mouses"],
            bgImage: images.feature_4,
            link: "example.com",
            price: 2500
        },
        {
            name: "Ventus 5",
            departments: ["keybaords", "headphones"],
            bgImage: images.feature_5,
            link: "example.com",
            price: 3000
        },
        {
            name: "Ventus 6",
            departments: ["mouses", "motherboards"],
            bgImage: images.feature_6,
            link: "example.com",
            price: 4000
        },
        {
            name: "Ventus 7",
            departments: ["keyboards", "headphones"],
            bgImage: images.feature_7,
            link: "example.com",
            price: 4500
        },
        {
            name: "Ventus 8",
            departments: ["motherboards", "headphones"],
            bgImage: images.feature_8,
            link: "example.com",
            price: 5000
        },
    ]

    const itemsEl = items.map(item => {
        return (
            <TabItem 
                key={nanoid()}
                name={item.name}
                departments={item.departments}
                bgImage={item.bgImage}
                link={item.link}
                price={item.price}
            />
        )
    })

    return (
        <section className="featured spad">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="section-title">
                          <h2>Featured Product</h2>
                      </div>
                      <div className="featured__controls">
                          <ul>
                              <li className="active" data-filter="*">All</li>
                              <li data-filter=".mouses">Mouses</li>
                              <li data-filter=".keyboards">Keyboards</li>
                              <li data-filter=".headphones">Headphones</li>
                              <li data-filter=".motherboards">Motherboards</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="row featured__filter">
                {itemsEl}
              </div>
          </div>
      </section>
    )
}