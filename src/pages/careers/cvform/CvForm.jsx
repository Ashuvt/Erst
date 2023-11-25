import MidTitle from "../../../components/midtitle/MidTitle";
import "./CvForm.scss";
import { icon } from "../../../utils/images/icons";
import { useEffect, useState } from "react";

const CvForm = () => {
  const [progress, setProgress] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  const fieldChange = (e) => {
    const { name, value } = e.target;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    setProgress(true);

    setTimeout(() => {
      setProgress(false);
    }, 1500);
  }, [formData.file]);

  const onSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("file", formData.file);

    const formDataObject = {};
    formDataToSend.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log(formDataObject);
  };

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
                  value={formData.name}
                  name="name"
                  onChange={fieldChange}
                />
              </div>
              <div className="form_field mt_20">
                <label className="wow fadeInUp">email</label>
                <input
                  className="wow fadeInUp"
                  type="email"
                  placeholder="your email"
                  value={formData.email}
                  name="email"
                  onChange={fieldChange}
                />
              </div>
            </div>

            <div className="form_field mt_20">
              <label className="wow fadeInUp">Phone</label>
              <input
                className="wow fadeInUp"
                type="number"
                placeholder="your phone"
                value={formData.phone}
                name="phone"
                onChange={fieldChange}
              />
            </div>

            <div className="form_field mt">
              <textarea
                className="wow fadeInUp"
                placeholder="tell about your skill"
                value={formData.message}
                name="message"
                onChange={fieldChange}
              />
            </div>

            <div className="form_field mt_20">
              <label className="wow fadeInUp">Upload Your CV / Resume Here</label>
              <div className="file_uploader wow fadeInUp">
                {progress && (
                  <div className="file_progress">
                    <div className="filler"></div>
                  </div>
                )}
                <input type="file" name="file" onChange={fieldChange} />
                <div className="upload_content">
                  <img src={icon.upload} alt="upload" />
                  <p className="t-11">Upload CV / Resume</p>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="primarybtn wow fadeInUp"
              onClick={onSubmit}
            >
              Leave A CV
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CvForm;
