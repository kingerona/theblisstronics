import HeroPages from "../components/nonhome/HeroPages";

export default function ErrorPage() {
    return (
        <>
            <HeroPages />
            <div className="error-page">
                <h1>Oops! The page is not found!</h1>
            </div>
        </>
    )
}