import "./StepC.scss";
import { Fragment, useState, useEffect, useContext } from "react";
import { baseUrl, fieldOfInterest, updateProfessionInterest } from "../../../utils/apidata";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { sendInterestedField } from "../../../store/actions";
import { redirectContext } from "../../../context/RoutingContext";

const StepC = ({ setStep, name }) => {

  const token = localStorage.getItem("token");

  const {toastSuccess} = useContext(redirectContext);
  
  const dispatch = useDispatch();
  const professionAndInterestData = useSelector(
    (state) => state.onBoardingReducer
  );

  const [tagsData, setTagsData] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);



  const SkipHandler = () => {
    setStep((prev) => prev + 1);
    setSelectedTags([]);
    dispatch({type:sendInterestedField(), payload:[]})
  };

  const addTag = (selected) => {
    setSelectedTags((prev) => {
      if (prev.includes(selected)) {
        return selectedTags.filter((ele) => ele._id !== selected._id);
      } else {
        return [...prev, selected];
      }
    });
  };

  const getfieldOfInterest = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${fieldOfInterest}`);
      if (response.data.success) {
        setTagsData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {    
    getfieldOfInterest();
  }, []);

  useEffect(() => {
    dispatch({
      type: sendInterestedField(),
      payload: selectedTags.map((ele) => ele.name),
    });
  }, [selectedTags]);

  const headers = {    
    'Authorization': `Bearer ${token}`,
  };


  const userPreferenceApi = async() => {
    console.log("HEADER:::", headers);
    try {
      const response = await axios.post(`${baseUrl}/${updateProfessionInterest}`,{...professionAndInterestData}, {headers});
      console.log("response:::", response)
      if(response.data.success){
        toastSuccess("User Preference Updated Successfully!");
      }
    } catch (error) {
      console.log("ERROR::::", error);
      
    }
  }


  const continueHandler = () => {
    setStep((prev) => prev + 1);   
    userPreferenceApi();
  };

  return (
    <div className="step_c">
      <h1 className="small_title wow fadeInUp">
        Hey {name ? name : "User"}, tell us about fields of interests
      </h1>
      <p className="wow fadeInUp">Let’s help you setup your learning path</p>

      <div className="tags_wrap">
        {tagsData.length > 0 ? (
          tagsData.map((ele) => {
            return (
              <Fragment key={ele._id}>
                <button
                  type="button"
                  className={`tagbtn wow fadeInUp ${
                    selectedTags.includes(ele) ? "active" : ""
                  }`}
                  onClick={() => addTag(ele)}
                >
                  {ele.name}
                </button>
              </Fragment>
            );
          })
        ) : (
          <p>Data Does Not Found...</p>
        )}
      </div>

      <div className="btns">
        <button
          type="button"
          className="authbtn auth_primary wow fadeInUp"
          onClick={continueHandler}
        >
          Continue
        </button>
        <button
          type="button"
          className="authbtn auth_secondary wow fadeInUp"
          onClick={SkipHandler}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default StepC;
