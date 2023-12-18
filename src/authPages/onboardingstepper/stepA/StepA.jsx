import { Fragment, useEffect, useState, useContext } from "react";
import "./StepA.scss";
import { icon } from "../../../utils/images/icons";
import { baseUrl, professionOption } from "../../../utils/apidata";
import axios from "axios";
import { useDispatch } from "react-redux";
import { sendProfession } from "../../../store/actions";

const StepA = ({ setStep, name}) => {

  const dispatch = useDispatch();

  const [optionsData, setOptionsData] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const continueHandler = () => {
    SkipHandler();
    dispatch({type:sendProfession(), payload:selectedOption.map(data => data.name)})
  };

  const SkipHandler = () => {
    setStep(prev => prev + 1);
    setSelectedOption([]);
    dispatch({type:sendProfession(), payload:[]})
  };

  const addSelection = (selected) => {
    setSelectedOption((prev) => {
      if (selectedOption.includes(selected)) {
        return prev.filter((ele) => ele._id !== selected._id);
      } else {
        return [...prev, selected];
      }
    });
  };

  const getOptions = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${professionOption}`);      
      if (response.data.success) {
        setOptionsData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOptions();
  }, []);

  const searchedData = () => {
    return optionsData.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );
  };



  return (
    <div className="step_a">
      <h1 className="small_title wow slideInUp">
        Hey {name ? name : "User"}, tell us about your department profession
      </h1>
      <p className="wow slideInUp">Let’s help you setup your learning path</p>

      <form>
        <div className="auth_field wow slideInUp">
          <div className="input_wrap">
            <input
              type="test"
              placeholder="search"
              name="search"
              autoComplete="off"
              onChange={searchHandler}
            />
            <img className="field_icon" src={icon.search} alt="email" />
          </div>
        </div>

        {searchedData().length > 0 ? (
          searchedData().map((data) => {
            return (
              <Fragment key={data._id}>
                <div
                  className={`select_field ${
                    selectedOption.includes(data) ? "active" : ""
                  } wow fadeInUp `}
                  onClick={() => addSelection(data)}
                >
                  <p className="small_text">{data.name}</p>
                  <div className="check_box">
                    <img
                      src={icon.checked}
                      alt="checked"
                      className={selectedOption.includes(data) ? "active" : ""}
                    />
                  </div>
                </div>
              </Fragment>
            );
          })
        ) : (
          <p>No Options Found...</p>
        )}
      </form>

      <div className="bottom_btn">
        <div className="btn_line">
          <button
            type="button"
            className="authbtn auth_primary wow slideInUp"
            onClick={continueHandler}
          >
            Continue
          </button>
          <button
            type="button"
            className="authbtn auth_secondary wow slideInUp"
            onClick={SkipHandler}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepA;
