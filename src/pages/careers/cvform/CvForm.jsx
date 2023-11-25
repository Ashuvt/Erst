import MidTitle from "../../../components/midtitle/MidTitle";
import "./CvForm.scss";
import { icon } from "../../../utils/images/icons";
import { useEffect, useState } from "react";
import ErrorMessageLine from "../../../components/errormessageline/ErrorMessageLine";

const CvForm = ({t}) => {
  const [progress, setProgress] = useState(false);

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [mailError, setMailError] = useState("");
  const [fileError, setFileError] = useState("");

  const validation = (name, value) => {
    if (name === "name") {
      if (value.trim().length === 0) {
        setNameError(t('errorFieldRequired'));
      } else {
        setNameError("");
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (value.trim().length === 0) {
        setMailError(t('errorFieldRequired'));
      } else if (!emailRegex.test(value)) {
        setMailError(t('errorFieldEmail'));
      } else {
        setMailError("");
      }
    }

    if (name === "phone") {
      if (value.trim().length === 0) {
        setPhoneError(t('errorFieldRequired'));
      } else {
        setPhoneError("");
      }
    }

    if (name === "file") {
      if (!value) {
        setFileError(t('errorFieldRequired'));
      } else {
        setFileError("");
      }
    }
  };

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

    validation(name, value);
  };

  useEffect(() => {
    if(formData.file){
    setProgress(true);

    setTimeout(() => {
      setProgress(false);
    }, 1500);
  }else{
    setProgress(false);
  }
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

  const blurHandler = (e) => {
    const { name, value } = e.target;
    validation(name, value);
  };
  return (
    <section className="cv_form">
      <div className="cv_form_glass a"></div>
      <div className="cv_form_glass b"></div>
      <div className="content_wrap p_top p_bottom">
        <MidTitle
          title={t('careerFormTitle')}
          text={t('careerFormPara')}
        />

        <div className="form_wraper">
          <form>
            <div className="bi_grid">
              <div className="form_field mt_20">
                <label className="wow fadeInUp">{t('careerFormName')}</label>

                <input
                  className="wow fadeInUp"
                  type="text"
                  placeholder={t('careerFormNamePlace')}
                  value={formData.name}
                  name="name"
                  onChange={fieldChange}
                  onBlur={blurHandler}
                />
                {nameError && <ErrorMessageLine text={nameError} />}
              </div>
              <div className="form_field mt_20">
                <label className="wow fadeInUp">{t('careerFormEmail')}</label>
                <input
                  className="wow fadeInUp"
                  type="email"
                  placeholder={t('careerFormEmailPlace')}
                  value={formData.email}
                  name="email"
                  onChange={fieldChange}
                  onBlur={blurHandler}
                />
                {mailError && <ErrorMessageLine text={mailError} />}
              </div>
            </div>

            <div className="form_field mt_20">
              <label className="wow fadeInUp">{t('careerFormPhone')}</label>
              <input
                className="wow fadeInUp"
                type="number"
                placeholder={t('careerFormPhonePlace')}
                value={formData.phone}
                name="phone"
                onChange={fieldChange}
                onBlur={blurHandler}
              />
              {phoneError && <ErrorMessageLine text={phoneError} />}
            </div>

            <div className="form_field mt">
              <textarea
                className="wow fadeInUp"
                placeholder={t('careerFormTextarea')}
                value={formData.message}
                name="message"
                onChange={fieldChange}
              />
            </div>

            <div className="form_field mt_20">
              <label className="wow fadeInUp">
              {t('careerFormFileTitle')}
              </label>
              <div className="file_uploader wow fadeInUp">
                {progress && (
                  <div className="file_progress">
                    <div className="filler"></div>
                  </div>
                )}
                <input
                  type="file"
                  name="file"
                  onChange={fieldChange}
                  onBlur={blurHandler}
                />
                <div className="upload_content">
                  <img src={icon.upload} alt="upload" />
                  <p className="t-11"> {t('careerFormFileContent')}</p>
                </div>
              </div>
              {fileError && <ErrorMessageLine text={fileError} />}
            </div>
            <button
              type="button"
              className="primarybtn wow fadeInUp"
              onClick={onSubmit}
            >
             {t('careerFormBtn')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CvForm;
