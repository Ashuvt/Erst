import { redirectContext } from "../../../context/RoutingContext";
import "./ProfileHelp.scss";
import { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, help, helpHistory } from "../../../utils/apidata";
import Accordion from "react-bootstrap/Accordion";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";

const Help = () => {
  const [message, setMessage] = useState("");

  const [history, setHistory] = useState([]);
  const [fieldError, setFieldError] = useState(false);
  const [loader, setLoader] = useState(false);
  const { toastSuccess, toastError } = useContext(redirectContext);


  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // Help History Api

  const helpHistoryApi = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${helpHistory}`, {
        headers,
      });
      if (response?.data?.success) {
        setHistory(response?.data?.data);
      } else {
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // Help Submit API
  const helpApi = async () => {
    setLoader(true);
    try {
      const response = await axios.post(
        `${baseUrl}/${help}`,
        { message: message },
        {
          headers,
        }
      );

      if (response.data.success) {
        toastSuccess("Message Sent Successfully!");
        setLoader(false);
        setMessage("");
        helpHistoryApi();
      } else {
        toastError("Something Went Wrong!");
        setLoader(false);
      }
    } catch (error) {
      console.log("ERR::", error);
      toastError("Something Went Wrong!");
      setLoader(false);
    }
  };

  const submitData = (e) => {
    if (message.trim().length > 0) {
      e.preventDefault();
      helpApi();
    } else {
      setFieldError(true);
    }
  };

  useEffect(() => {
    helpHistoryApi();
  }, []);

  return (
    <div className="profile_help">
      <div className="title">
        <h5 className="small_title  wow fadeInUp">Need help</h5>
        <p className=" wow fadeInUp">
          Please share your problem or any feedback, we’ll reach out to you.
        </p>
      </div>

      <textarea
        placeholder="Start Typing Here..."
        value={message}
        className="wow fadeInUp"
        onChange={(e) => setMessage(e.target.value)}
        onFocus={() => setFieldError(false)}
      ></textarea>
      {fieldError ? (
        <p className="t-i-12 error">Field should not be empty!</p>
      ) : (
        <p className="t-i-12 wow fadeInUp">
          Our team will reach out to in 24 hours.
        </p>
      )}

      {loader ? (
        <button
          type="button"
          className="authbtn auth_primary wow fadeInUp"
          disabled
        >
          Loading ...
        </button>
      ) : (
        <button
          type="button"
          onClick={submitData}
          className="authbtn auth_primary wow fadeInUp"
        >
          Send
        </button>
      )}
      <h6>History</h6>

      <div className="history_wrap">
        {history.length > 0 ? (
          <Accordion defaultActiveKey="0">
            {history?.map((data, i) => {
              return (
                <Accordion.Item eventKey={`${i}`} key={data._id}>
                  <Accordion.Header>
                    <p>{data.message}</p>
                    <span className="minus">
                      <IoMdRemove />
                    </span>
                    <span className="plus">
                      <IoMdAdd />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{data.reply}</p>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        ) : (
          <p>History Does Not Found.</p>
        )}
      </div>
    </div>
  );
};

export default Help;
