import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/Map";
import Breadcrumb from "../components/nonhome/Breadcumb";
import HeroPages from "../components/nonhome/HeroPages";

export default function Contact() {
    return (
        <>
            <HeroPages />
            <Breadcrumb />
            <ContactDetails />
            <ContactMap />
            <ContactForm />
        </>
    )
}