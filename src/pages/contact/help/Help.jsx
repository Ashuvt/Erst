import { useContext, useState } from "react";
import "./Help.scss";
import Map from "../../../components/map/Map";
import MidTitle from "../../../components/midtitle/MidTitle";
import { useDispatch, useSelector } from "react-redux";
import { resetAllToggler } from "../../../store/actions";
import ErrorMessageLine from "../../../components/errormessageline/ErrorMessageLine";
import { baseUrl, needAssistance } from "../../../utils/apidata";
import axios from "axios";
import { redirectContext } from "../../../context/RoutingContext";

const Help = ({ t }) => {
  const {toastError} = useContext(redirectContext);
  const dispatch = useDispatch();
  const ddStatus = useSelector((state) => state.toggleReducer.helpFormDdStatus);

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const [selectedProblem, setSelectedProblem] = useState("");

  const [nameError, setNameError] = useState("");
  const [numError, setNumError] = useState("");
  const [mailError, setMailError] = useState("");
  const [messageError, setMessageError] = useState();

  const initialState = {
    name: "",
    email: "",
    number: "",
    message: "",
    problem: "test",
  };

  const [help, setHelp] = useState({
    ...initialState,
  });

  const validation = (name, value) => {
    if (name === "name") {
      if (value.trim().length === 0) {
        setNameError(t("errorFieldRequired"));
      } else {
        setNameError("");
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (value.trim().length === 0) {
        setMailError(t("errorFieldRequired"));
      } else if (!emailRegex.test(value)) {
        setMailError(t("errorFieldEmail"));
      } else {
        setMailError("");
      }
    }

    if (name === "number") {
      if (value.trim().length === 0) {
        setNumError(t("errorFieldRequired"));
      } else {
        setNumError("");
      }
    }

    if (name === "message") {
      if (value.trim().length === 0) {
        setMessageError(t("errorFieldRequired"));
      } else {
        setMessageError("");
      }
    }
  };
  const blurHandler = (e) => {
    const { name, value } = e.target;
    validation(name, value);
  };

  const isValid = () => {
    if (!help.name || !help.email || !help.number || !help.message) {
      return false;
    } else {
      return true;
    }
  };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setHelp((values) => ({ ...values, [name]: value }));

    validation(name, value);
  };

  // const ddToggler = (e) => {
  //   e.stopPropagation();
  //   dispatch({type:helpDdToggler(), payload:!ddStatus});
  // };

  const proglemList = [
    {
      id: "111",
      option: "Option A",
    },
    {
      id: "222",
      option: "Option B",
    },
    {
      id: "333",
      option: "Option C",
    },
    {
      id: "444",
      option: "Option D",
    },
    {
      id: "555",
      option: "Option E",
    },
  ];

  // const selectOption = (data) => {
  //   setSelectedProblem(data.option);
  //   setHelp(values => ({...values, problem:data.option}))
  // }

  const fullPageClick = () => {
    dispatch({ type: resetAllToggler() });
  };

  const contactApi = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(`${baseUrl}/${needAssistance}`,{...help});
      if (response.data.success) {
        setLoading(false);
        setSuccess(true);
        setHelp({ ...initialState });
        setTimeout(() => {
          setSuccess(false);
        }, [2000]);
      }
    } catch (error) {
      if(error.message){
        toastError(error.message || "Something Went Wrong!");
      }
      setLoading(false);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    contactApi();
  };

  return (
    <section className="contact_help p_top p_bottom" onClick={fullPageClick}>
      <div className="content_wrap">
        <Map />
        <div className="filler"></div>
        <MidTitle title={t("contactFormTitle")} text={t("contactFormPara")} />
        <div className="help_form">
          <form>
            <div className={`success_message ${success ? "open" : "close"}`}>
              <h4>Message Sent Successfully!</h4>
              <p>Data You have Submitted has been saved!</p>
            </div>
            <div className="info_fields wow slideInUp">
              <div className="field_box">
                <input
                  type="text"
                  placeholder={t("contactFormName")}
                  name="name"
                  value={help.name}
                  onChange={formHandler}
                  onBlur={blurHandler}
                />
                {nameError && <ErrorMessageLine text={nameError} />}
              </div>

              <div className="field_box">
                <input
                  type="email"
                  placeholder={t("contactFormEmail")}
                  name="email"
                  value={help.email}
                  onChange={formHandler}
                  onBlur={blurHandler}
                />
                {mailError && <ErrorMessageLine text={mailError} />}
              </div>
              <div className="field_box">
                <input
                  type="number"
                  placeholder={t("contactFormNumber")}
                  name="number"
                  value={help.number}
                  onChange={formHandler}
                  onBlur={blurHandler}
                />
                {numError && <ErrorMessageLine text={numError} />}
              </div>

              {/* <div className="custom_dropdown" onClick={ddToggler}>
                {selectedProblem ? <p>{selectedProblem}</p> : <p className="light">select Problem</p>}
                <div className={`option_list ${ddStatus ? 'open' : 'close'}`}>
              {
                proglemList.map((data) => {
                  return(
                    <button type="button" className={`optionbtn ${selectedProblem === data.option ? 'active' : ''}`} key={data.id} onClick={() => selectOption(data)} >{data.option}</button>
                  )
                })
              }
                </div>
              </div> */}
            </div>
            <textarea
              placeholder={t("contactFormMessage")}
              className="wow slideInUp"
              name="message"
              value={help.message}
              onChange={formHandler}
              onBlur={blurHandler}
            ></textarea>
            {messageError && <ErrorMessageLine text={messageError} />}
            <button
              type="button"
              className={`primarybtn wow slideInUp}`}
              onClick={formSubmitHandler}
              disabled={!isValid() || loading}
            >
              {loading ? "loading..." : t("contactFormBtn")}
            </button>
          </form>
        </div>
      </div>

      <div className="pink_blur left"></div>
      <div className="pink_blur right"></div>
    </section>
  );
};

export default Help;
