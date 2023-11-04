import { useEffect } from "react";
import { icons, images } from "../../../../utils/images/images";
import "./LeftScreen.scss";

const LeftScreen = ({ side, setSide }) => {

  return (
    <section className="benefit_suite_left p_top p_bottom">
      <div className="content_wrap">
        <div className={`text_content ${side ? 'goleft' : 'original'}`}>
          <h2 className="wow fadeInUp">Lorem ipsum dolor sit amet consectetur.</h2>
          <p className="wow fadeInUp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi, rerum consectetur cumque, vel voluptatem quas temporibus reprehenderit accusantium doloribus modi tempore obcaecati necessitatibus architecto iusto earum nemo, nobis iure ex explicabo voluptate? Eveniet repellat ullam unde? Deleniti a, commodi sint, eaque nesciunt quam numquam fugit dicta ab labore ducimus!
          </p>
          <button type="button" className="primarybtn wow fadeInUp">
            start free trial
          </button>
        </div>
        <div className="box_card_side">
          <div className="box_card">
            <div className="btn_block">
              <button type="button" onClick={() => setSide(true)}>
                <img src={icons.whiteArrow} alt="arrow" />
              </button>
              <h6>for business</h6>
            </div>
            <div className="overlay"></div>
            <img src={images.benefitSuite} className="bg" alt="bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftScreen;
