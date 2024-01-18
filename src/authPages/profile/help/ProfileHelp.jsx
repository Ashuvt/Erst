import { redirectContext } from "../../../context/RoutingContext";
import "./ProfileHelp.scss";
import { useContext, useState } from "react";
import axios from "axios";
import { baseUrl, help } from "../../../utils/apidata";

const Help = () => {
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);
  const { toastSuccess, toastError } = useContext(redirectContext);
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

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
    e.preventDefault();
    helpApi();
  };

  return (
    <div className="profile_help">
      <div className="title">
        <h5 className="small_title  wow fadeInUp">Need help</h5>
        <p className=" wow fadeInUp">
          Please share your problem or any feedback, we’ll reach out to you.
        </p>

        <textarea
          placeholder="Start Typing Here..."
          value={message}
          className="wow fadeInUp"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <p className="t-i-12 wow fadeInUp">
          Our team will reach out to in 24 hours.
        </p>
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
      </div>
    </div>
  );
};

export default Help;
