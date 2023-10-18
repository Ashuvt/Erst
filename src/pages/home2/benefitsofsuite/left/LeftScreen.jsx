import { icons, images } from "../../../../utils/images/images";
import "./LeftScreen.scss";

const LeftScreen = ({setSide}) => {
  return (
    <section className="benefit_suite_left p_top p_bottom">
      <div className="content_wrap">
        <div className="text_content">
          <h2>Benefits Of The Intelligent Suite</h2>
          <p>
            The Intelligent Analytics Suite is a powerful software solution that
            offers advanced analytics capabilities to businesses. It provides
            valuable insights and actionable intelligence based on data
            collected from various sources, helping businesses make informed
            decisions and drive growth. In this blog post, we will discuss the
            benefits of using the Intelligent Analytics Suite and when and why
            businesses should consider implementing it.
          </p>
          <button type="button" className="primarybtn">
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
