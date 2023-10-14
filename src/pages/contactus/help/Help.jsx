import "./Help.scss";
import Map from "../../../components/map/Map";
import MidTitle from "../../../components/midtitle/MidTitle";

const Help = () => {
  return (
    <section className="contact_help">
      <div className="content_wrap">
        <Map />
        <div className="filler">
          
        </div>
        <MidTitle
          title="Still Need Help?"
          text="The Smart Sales Assistant can also provide insights into customer
          behavior and preferences, allowing you to optimize your marketing
          and sales strategies."
        />
        <div className="help_form">
          <form>
            <div className="info_fields">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Number" />
              <input type="text" placeholder="Problem Type" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="button" className="primarybtn">send message</button>    
          </form>
        </div>
      </div>

      <div className="pink_blur left"></div>
      <div className="pink_blur right"></div>
      
    </section>
  );
};

export default Help;
