import { nanoid } from "nanoid";

export default function FilterByDpt() {
    const allDepartments = [
        {
            name: "Computer",
            link: "example.com"
        },
        {
            name: "Laptops",
            link: "example.com"
        },
        {
            name: "Computer Accessories",
            link: "example.com"
        },
        {
            name: "Mouses",
            link: "example.com"
        },
        {
            name: "Keyboards",
            link: "example.com"
        },
        {
            name: "iPads",
            link: "example.com"
        },
        {
            name: "iPhones",
            link: "example.com"
        },
        {
            name: "Android Phones",
            link: "example.com"
        },
        {
            name: "Headphones",
            link: "example.com"
        },
        {
            name: "Mobile Accessories",
            link: "example.com"
        },
        {
            name: "Fresh Gadgets",
            link: "example.com"
        }
    ]

    const departmentsEl = allDepartments.map(dpt => {
        return (
            <li key={nanoid()}><a href={dpt.link}>{dpt.name}</a></li>
        )
    })

    return (
        <div className="sidebar__item">
            <h4>Department</h4>
            <ul>
                {departmentsEl}
            </ul>
        </div>
    )
}