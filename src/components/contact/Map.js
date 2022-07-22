export default function ContactMap() {
    return (
        <div className="map">
            <iframe
                title="Blisstyle Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2856067470298!2d90.41379301527459!3d23.772841893834883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c720d148e2cd%3A0x104ebd15425972ef!2sBlisstyle%20electronics!5e0!3m2!1sen!2sbd!4v1658050331998!5m2!1sen!2sbd"
                height="500" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <div className="map-inside">
                <i className="icon_pin"></i>
                <div className="inside-widget">
                    <h4>The Blisstronics</h4>
                    <ul>
                        <li>Phone: +12-345-6789</li>
                        <li>Gulshan, Dhaka</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}