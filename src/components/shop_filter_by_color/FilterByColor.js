export default function FilterByColor() {
    const colors = [
        {
            name: "White",
            id: "white",
            key: "white"
        },
        {
            name: "Gray",
            id: "gray",
            key: "gray"
        },
        {
            name: "Red",
            id: "red",
            key: "red"
        },
        {
            name: "Black",
            id: "black",
            key: "black"
        },
        {
            name: "Blue",
            id: "blue",
            key: "blue"
        },
        {
            name: "Green",
            id: "green",
            key: "green"
        }
    ]

    const colorsEl = colors.map(color => {
        return (
            <div key={color.key} className={`sidebar__item__color sidebar__item__color--${color.id}`}>
                <label htmlFor={color.id}>
                    {color.name}
                    <input type="radio" id={color.id}/>
                </label>
            </div>
        )
    })

    return (
        <div className="sidebar__item sidebar__item__color--option">
            <h4>Colors</h4>
            {colorsEl}
        </div>
    )
}