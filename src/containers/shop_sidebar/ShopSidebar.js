import { FilterByDpt, FilterByPrice, FilterByColor, FilterBySize, LatestProducts} from "../../components"

import "./ShopSidebar.scss"

export default function ShopSidebar() {
    return (
        <div className="sidebar">
            <FilterByDpt />
            <FilterByPrice />
            <FilterByColor />
            <FilterBySize />
            <LatestProducts />
        </div>
    )
}