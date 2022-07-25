import FilteredItems from "./shopcomponents/FilteredItems";
import SaleOff from "./shopcomponents/SaleOff";
import ShopSidebar from "./ShopSidebar";

export default function ShopComponent() {
    return (
        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5">
                        <ShopSidebar />
                    </div>
                    <div className="col-lg-9 col-md-7">
                        <SaleOff />
                        <FilteredItems />
                    </div>
                </div>
            </div>
        </section>
    )
}