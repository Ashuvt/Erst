import { icons, images } from "../../../utils/images/images";
import "./MyProfile.scss";
import { CgProfile } from "react-icons/cg";
import { contryDdToggler } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrl, profileUpdate } from "../../../utils/apidata";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { redirectContext } from "../../../context/RoutingContext";

const MyProfile = () => {
  const countryList = [
    {
      id: 0,
      name: "Israel",
    },
    {
      id: 1,
      name: "UAE",
    },
    {
      id: 2,
      name: "India",
    },
    {
      id: 3,
      name: "Other",
    },
  ];

  const { toastSuccess, toastError, getProfileApi } =
    useContext(redirectContext);
  const [loader, setLoader] = useState(false);
  const ddStatus = useSelector((state) => state.toggleReducer.countryDdStatus);
  const dispatch = useDispatch();
  const { profile, name, bio, country } = useSelector(
    (data) => data.getProfileDataReducer
  );

  const [fieldData, setFieldData] = useState({
    name: name,
    country: country,
    profile: profile,
    bio: bio,
  });

  const fieldChange = (e) => {
    const { name, value } = e.target;
    if (name == "profile") {
      setFieldData((prev) => ({ ...prev, profile: e.target.files[0] }));
    } else {
      setFieldData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const ddToggler = (event) => {
    event.stopPropagation();
    dispatch({ type: contryDdToggler(), payload: !ddStatus });
  };

  // Profile Update APi
  const profileUpdateApi = async (data) => {
    setLoader(true);
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };
    try {
      const response = await axios.post(
        `${baseUrl}/${profileUpdate}`,
        { ...data },
        { headers }
      );

      if (response?.data?.success) {
        toastSuccess(response?.data?.message);
        getProfileApi();
        setLoader(false);
      } else {
        toastError("Something Went Wrong!");
      }
    } catch (error) {
      console.log(error);
      toastError("Something Went Wrong!");
      setLoader(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", fieldData.name);
    formDataToSend.append("country", fieldData.country);
    formDataToSend.append("profile", fieldData.profile);
    formDataToSend.append("bio", fieldData.bio);

    const formDataObject = {};

    formDataToSend.forEach((value, key) => {
      formDataObject[key] = value;
    });

    profileUpdateApi(formDataObject);
  };

  return (
    <div className="profile_accounts">
      <div className="profile_info wow fadeInUp">
        <div className="profile_wraper">
        {profile ? (
                  <img src={`${baseUrl}/${profile}`} alt="profile" />
                ) : (
                  <img src={images.avtar} alt="profile" />
                )} 
        </div>
        <div className="text_info">
          <h5 className="small_title">Account</h5>
          <p>Manage your account and related information</p>
        </div>
      </div>

      <form encType="multipart/form-data">
        <div className="bi_grid">
          <div className="profile_field wow fadeInUp">
            <label html="name">Name</label>
            <input
              type="text"
              placeholder="name"
              name="name"
              id="name"
              value={fieldData.name}
              onChange={fieldChange}
            />
          </div>

          <div className="profile_field wow fadeInUp">
            <label htmlFor="Country">country</label>
            <div className="input_wrap">
              <input
                type="text"
                readOnly
                placeholder="Select"
                name="country"
                className="dd"
                value={fieldData.country}
                onClick={ddToggler}
              />
              <div className={`option_wrap ${ddStatus ? "open" : "close"}`}>
                {countryList.map((item) => {
                  return (
                    <label className={`option`} key={item.id}>
                      {item.name}
                      <input
                        type="radio"
                        name="country"
                        value={item.name}
                        id="country"
                        onChange={fieldChange}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="profile_field wow fadeInUp">
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            placeholder="Add Bio..."
            name="bio"
            id="bio"
            value={fieldData.bio}
            onChange={fieldChange}
          />
        </div>

        <div className="profile_field wow fadeInUp">
          <label htmlFor="profile">Profile</label>
          <div className="file_wraper">
            <div className="overlay">
              <CgProfile />
              <p>Add Profile</p>
            </div>
            <input
              type="file"
              name="profile"
              id="profile"
              onChange={fieldChange}
            />
          </div>
        </div>

        <div className="btn_line">
          {loader ? (
            <button
              type="button"
              className="authbtn auth_primary wow fadeInUp"
              disabled
            >
              Loading...
            </button>
          ) : (
            <button
              type="button"
              className="authbtn auth_primary wow fadeInUp"
              onClick={submitHandler}
            >
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
