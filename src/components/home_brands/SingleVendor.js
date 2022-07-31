export default function SingleVendor(props) {
    return (
        <div className="col-lg-3">
            <div className="vendors__item set-bg" data-setbg={props.bgImage} >
                <h5><a href={props.link}>{props.name}</a></h5>
            </div>
        </div>
    )
}