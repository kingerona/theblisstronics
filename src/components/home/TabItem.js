export default function TabItem(props) {
    let departments = ""
    props.departments.map(department => {
        departments += department + " "
        return departments
    })
    
    return (
        <div className={`col-lg-3 col-md-4 col-sm-6 mix ${departments}`}>
            <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg={props.bgImage}>
                    <ul className="featured__item__pic__hover">
                        <li><a href="example.com"><i className="fa fa-heart"></i></a></li>
                        <li><a href="example.com"><i className="fa fa-retweet"></i></a></li>
                        <li><a href="example.com"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="featured__item__text">
                    <h6><a href={props.link}>{props.name}</a></h6>
                    <h5>Tk {props.price}</h5>
                </div>
            </div>
        </div>
    )
}