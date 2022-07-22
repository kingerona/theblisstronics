import CartComponent from "../components/cart/CartComponent";
import Breadcrumb from "../components/nonhome/Breadcumb";
import HeroPages from "../components/nonhome/HeroPages";

export default function Cart() {
    return (
        <>
            <HeroPages />
            <Breadcrumb />
            <CartComponent />
        </>
    )
}