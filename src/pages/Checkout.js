import CheckoutComponent from "../components/checkout/CheckoutComponent";
import Breadcrumb from "../components/nonhome/Breadcumb";
import HeroPages from "../components/nonhome/HeroPages";

export default function Checkout() {
    return (
        <>
            <HeroPages />
            <Breadcrumb />
            <CheckoutComponent />
        </>
    )
}