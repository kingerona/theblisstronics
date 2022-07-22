import Breadcrumb from "../components/nonhome/Breadcumb";
import HeroPages from "../components/nonhome/HeroPages";
import ProductDetails from "../components/single_product/ProductDetails";
import RelatedProduct from "../components/single_product/RelatedProduct";

export default function SingleProduct() {
    return (
        <>
            <HeroPages />
            <Breadcrumb />
            <ProductDetails />
            <RelatedProduct />
        </>
    )
}