import "./Help.scss";
import Map from "../../../components/map/Map";


const Help = () => {
    return(
        <section className="contact_help">
            <div className="content_wrap">
            <Map />
            <div className="help_text">
                <h2>Still Need Help?</h2>
                <p>The Smart Sales Assistant can also provide insights into customer behavior and preferences, allowing you to optimize your marketing and sales strategies.</p>
            </div>
            <div className="help_form">
                <form>
                    <div className="info_fields">
                            <input type="text" placeholder="Your name" />
                            <input type="email" placeholder="Email" />
                            <input type="number" placeholder="Number" />
                            <input type="text" placeholder="Problem Type" />
                    </div>
                    <textarea placeholder="Message"></textarea>
                </form>
            </div>
            </div>
        </section>
    )
};

export default Help;