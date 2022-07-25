export default function FilterBySize() {
    const sizes = [
        {
            name: "Large",
            id: "large"
        },
        {
            name: "Medium",
            id: "medium"
        },
        {
            name: "Small",
            id: "small"
        },
        {
            name: "Tiny",
            id: "tiny"
        },
    ]

    const sizesEl = sizes.map(size => {
        return (
            <div key={size.id} className="sidebar__item__size">
                <label htmlFor={size.id}>
                    {size.name}
                    <input type="radio" id={size.id}/>
                </label>
            </div>
        )
    })

    return (
        <div className="sidebar__item">
            <h4>Popular Size</h4>
            {sizesEl}
        </div>
    )
}