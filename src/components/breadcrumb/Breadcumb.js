import { images } from "../../constants"
import "./Breadcrumb.scss"

export default function Breadcrumb() {
    return (
        <section className="breadcrumb-section set-bg" data-setbg={images.breadcrumb}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>Blisstronics Shop</h2>
                            <div className="breadcrumb__option">
                                <a href="/">Home</a>
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}