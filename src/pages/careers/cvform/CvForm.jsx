import MidTitle from "../../../components/midtitle/MidTitle";
import "./CvForm.scss";
import { icon } from "../../../utils/images/icons";

const CvForm = () => {

    
  return (
    <section className="cv_form">
      <div className="cv_form_glass a"></div>
      <div className="cv_form_glass b"></div>
      <div className="content_wrap p_top p_bottom">
        <MidTitle
          title="Send us Your CV"
          text="Leave your resume if you are interested in a vacancy. We will definitely contact you."
        />

        <div className="form_wraper">
          <form>
            <div className="bi_grid">
              <div className="form_field mt_20">
                <label className="wow fadeInUp">name</label>
                <input
                  className="wow fadeInUp"
                  type="text"
                  placeholder="your name"
                />
              </div>
              <div className="form_field mt_20">
                <label className="wow fadeInUp">email</label>
                <input
                  className="wow fadeInUp"
                  type="email"
                  placeholder="your email"
                />
              </div>
            </div>

            <div className="form_field mt_20">
              <label className="wow fadeInUp">Phone</label>
              <input
                className="wow fadeInUp"
                type="email"
                placeholder="your phone"
              />
            </div>

            <div className="form_field mt">
              <textarea
                className="wow fadeInUp"
                placeholder="tell about your skill"
              />
            </div>

            <div className="form_field mt_20">
              <label className="wow fadeInUp">Upload Your Portfolio Here</label>
              <div className="file_uploader wow fadeInUp">
                <input type="file" />
                <div className="upload_content">
                  <img src={icon.upload} alt="upload" />
                  <p className="t-11">Upload CV / Resume</p>
                </div>
              </div>
            </div>
            <button type="button" className="primarybtn wow fadeInUp">
              Leave A CV
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CvForm;
