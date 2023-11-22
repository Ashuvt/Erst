import { icons, images } from "../../../../utils/images/images";
import "./RightScreen.scss";

const RightScreen = ({side, setSide}) => {
  return (
    <section className="benefit_suite_right p_top p_bottom">
      <div className="content_wrap">
       
        <div className="box_card_side">
          <div className="box_card">
            <div className="btn_block">
                <button type="button" onClick={() => setSide(false)}>
                    <img src={icons.whiteArrow} alt="arrow" />
                </button>
                <h6>For Universities</h6>
            </div>
            <div className="overlay"></div>
            <img src={images.contactUsBanner} className="bg" alt="bg" />
          </div>
        </div>
        <div className={`text_content ${!side ? 'goright' : 'original'}`}>
          <h2 className="wow fadeInUp">About Cyber Gain Center.</h2>
          <p className="wow fadeInUp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi, rerum consectetur cumque, vel voluptatem quas temporibus reprehenderit accusantium doloribus modi tempore obcaecati necessitatibus architecto iusto earum nemo, nobis iure ex explicabo voluptate? Eveniet repellat ullam unde? Deleniti a, commodi sint, eaque nesciunt quam numquam fugit dicta ab labore ducimus!
          </p>
          <button type="button" className="primarybtn wow fadeInUp">
            buy package now
          </button>
        </div>
      </div>
    </section>
  );
};

export default RightScreen;
