import FilterByColor from "./sidebar/FilterByColor"
import FilterByDpt from "./sidebar/FilterByDpt"
import FilterByPrice from "./sidebar/FilterByPrice"
import FilterBySize from "./sidebar/FilterBySize"
import LatestProducts from "./sidebar/LatestProducts"

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