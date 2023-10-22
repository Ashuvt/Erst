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
                <h6>for business</h6>
            </div>
            <div className="overlay"></div>
            <img src={images.contactUsBanner} className="bg" alt="bg" />
          </div>
        </div>
        <div className={`text_content ${!side ? 'goright' : 'original'}`}>
          <h2>Business With Intelligent Suite</h2>
          <p>
          The Intelligent Analytics Suite is a powerful software solution that offers advanced analytics capabilities to businesses. It provides valuable insights and actionable intelligence based on data collected from various sources, helping businesses make informed decisions and drive growth. In this blog post, we will discuss the benefits of using the Intelligent Analytics Suite and when and why businesses should consider implementing it.
          </p>
          <button type="button" className="primarybtn">
            buy package now
          </button>
        </div>
      </div>
    </section>
  );
};

export default RightScreen;
