import { nanoid } from "nanoid"
import SingleVendor from "./SingleVendor"

import { images } from "../../constants"

export default function Vendors() {
    const allVendors = [
        {
            name: "Asus",
            bgImage: images.vendor_1,
            link: "example.com"
        }, 
        {
            name: "Del",
            bgImage: images.vendor_2,
            link: "example.com"
        },
        {
            name: "Gigabyte",
            bgImage: images.vendor_3,
            link: "example.com"
        },
        {
            name: "Intel",
            bgImage: images.vendor_4,
            link: "example.com"
        },
        {
            name: "Samsung",
            bgImage: images.vendor_5,
            link: "example.com"
        }
    ]

    const vendorsEl = allVendors.map(vendor => {
        return (
            <SingleVendor
                key={nanoid()}
                name={vendor.name}
                bgImage={vendor.bgImage}
                link={vendor.link}
            />
        )
    })

    return (
        <section className="vendors">
          <div className="container">
              <div className="row">             
                  <div className="vendors__slider owl-carousel">
                      {vendorsEl}
                  </div>
              </div>
          </div>
      </section>
    )
}