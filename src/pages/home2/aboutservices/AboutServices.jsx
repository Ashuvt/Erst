import "./AboutServices.scss";
import { images } from "../../../utils/images/images";

const AboutServices = () => {
  return (
    <section className="about_services" id="aboutService">
      <div className="content_wrap p_bottom p_top">
        <div className="bottom_line wow zoomIn"></div>
        <div className="bisec_title">
          <h2 className="wow fadeInUp">Building a Safer Future</h2>
          <p className="wow fadeInUp">
          Read More on Our Commitment to Protecting and Empowering in the World of Cybersecurity. Discover How We Drive Change, Foster Innovation, and Safeguard Tomorrow's Digital Landscape.
          </p>
        </div>
        <div className="bi_grid">
          <div className="img_wrap wow fadeInUp">
            <img src={images.about} alt="mobile" />
          </div>
          <div className="cards_wrap">
            <div className="content_card wow fadeInUp">             
              <h5>Mission</h5>
              <p>
              In our fast-changing world, where technology has seamlessly integrated into our everyday activities, it possesses great power and immense influence. However, this great power also exposes us to various risks that require our immediate attention. These risks include data leaks, crafty email tricks, the menace of malicious software, the weaknesses of feeble passwords, and the looming threat of identity theft, among others.

              </p>
            </div>
            <div className="content_card wow fadeInUp">
              <h5>Vision</h5>
              <p>
              Our vision is to be a global leader in cybersecurity education, making it accessible to everyone. We aim to empower individuals from all backgrounds to become skilled defenders in the digital realm.

              </p>
            </div>
            <div className="content_card wow fadeInUp">
              <h5>Purpose.</h5>
              <p>
              EDUCATE, EMPOWER, SPREAD AWARENESS AND PROMOTE GLOBAL SECURITY. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="primary_light_glass wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s" ></div>
      <div className="primary_class first wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s" ></div>
      <div className="primary_class second wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s" ></div>
    </section>
  );
};

export default AboutServices;
