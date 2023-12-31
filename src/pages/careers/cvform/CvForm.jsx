import MidTitle from "../../../components/midtitle/MidTitle";
import "./CvForm.scss";
import { icon } from "../../../utils/images/icons";
import { useEffect, useState, useContext } from "react";
import ErrorMessageLine from "../../../components/errormessageline/ErrorMessageLine";
import { baseUrl, sendCv } from "../../../utils/apidata";
import axios from "axios";
import { redirectContext } from "../../../context/RoutingContext";

const CvForm = ({t}) => {

  const {toastError} = useContext(redirectContext);
  
  const [progress, setProgress] = useState(false);

  const [success, setSuccess] = useState(false);

  const [submittedRes, setSubmittedRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [mailError, setMailError] = useState("");
  const [pdfError, setPdfError] = useState("");

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

    if (name === "pdf") {
      if (!value) {
        setPdfError(t('errorFieldRequired'));
      } else {
        setPdfError("");
      }
    }
  };

const initialState = {
  name: "",
  email: "",
  phone: "",
  skill: "",
  pdf: null,
}

  const [formData, setFormData] = useState({
   ...initialState,
  });

  const fieldChange = (e) => {
    const { name, value } = e.target;
    if (name == "pdf") {
      console.log("pdf");
      setFormData((prev) => ({ ...prev, pdf: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    validation(name, value);
  };

  useEffect(() => {
    if(formData.pdf){
    setProgress(true);

    setTimeout(() => {
      setProgress(false);
    }, 1500);
    
  }else{
    setProgress(false);
  }
  }, [formData.pdf]);



  const blurHandler = (e) => {
    const { name, value } = e.target;
    validation(name, value);
  };

  const cvApi = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(`${baseUrl}/${sendCv}`, {...data},{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
      if(response.data.success){
        setLoading(false);
        setSuccess(true);
        setFormData({...initialState});
        setTimeout(() => {
          setSuccess(false);
        }, [2000]);
      }
      setSubmittedRes(response);
    } catch (error) {
        if(error.message){
          toastError(error.message || "something Went Wrong!")
        }

    }
  };


  const onSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("skill", formData.skill);
    formDataToSend.append("pdf", formData.pdf);

    const formDataObject = {};
    formDataToSend.forEach((value, key) => {
      formDataObject[key] = value;
    });    
    
    cvApi(formDataObject);
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

          <form encType="multipart/form-data" >

          <div className={`success_message ${success ? "open" : "close"}`}>
              <h4>CV Submited Successfully!</h4>
              <p>Data You have Submitted has been Sent Successfully!</p>
            </div>

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
                value={formData.skill}
                name="skill"
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
                  name="pdf"
                  onChange={fieldChange}
                  onBlur={blurHandler}
                />
                <div className="upload_content">
                  <img src={icon.upload} alt="upload" />
                  <p className="t-11">
                  {formData?.pdf?.name ? formData?.pdf?.name : t('careerFormFileContent')}</p>
                </div>
              </div>
              {pdfError && <ErrorMessageLine text={pdfError} />}
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
