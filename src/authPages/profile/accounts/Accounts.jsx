import { icons, images } from "../../../utils/images/images";
import "./Accounts.scss";
import { CgProfile } from "react-icons/cg";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contryDdToggler } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import FieldErrorMessage from "../../components/errorMessage/FieldErrorMessage";
import axios from "axios";
import { baseUrl, profileUpdate } from "../../../utils/apidata";
import { useContext, useState } from "react";
import { redirectContext } from "../../../context/RoutingContext";

const Accounts = ({profile, recallProfile}) => {

  const profileData = useSelector(state => state?.getProfileDataReducer);
  console.log(profileData);
  // const email = localStorage.getItem("email");
  // const name = localStorage.getItem("name");
  const token = localStorage.getItem("token");

  const { toastSuccess, toastError } = useContext(redirectContext);

  const ddStatus = useSelector((state) => state.toggleReducer.countryDdStatus);
  const [Loader, setLoader] = useState(false);

  const dispatch = useDispatch();
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

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const profileUpdateApi = async (data) => {
    setLoader(true);
    try {
      const response = await axios.post(`${baseUrl}/${profileUpdate}`, data, {
        headers,
      });

      if(response.data.success) {
        toastSuccess("Profile Update Success!");
        recallProfile();
        setLoader(false);
        
      } else {
        toastError("Something Went Wrong!");
        setLoader(false);
      }
    } catch (error) {
      console.log("ERR::", error);
      setLoader(false);
    }
  };

  let initialValues = {
    name:profileData?.name || "",
    country:profileData?.country || "",
    profile:"",
    bio:profileData?.bio || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    country: Yup.string().required("Country is required!"),
    bio: Yup.string().required("Bio is required!"),
  });

  const onSubmit = (values, {resetForm}) => {
    profileUpdateApi(values);
    // resetForm();
  };

  const ddToggler = (event) => {
    event.stopPropagation();
    dispatch({ type: contryDdToggler(), payload: !ddStatus });
  };
  return (
    <div className="profile_accounts">
      <div className="profile_info wow fadeInUp">
        <div className="profile_wraper">
          <img src={`${baseUrl}/${profile?.profile}`} alt="profile" />
        </div>
        <div className="text_info">
          <h5 className="small_title">Account</h5>
          <p>Manage your account and related information</p>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="bi_grid">
            <div className="profile_field wow fadeInUp">
              <label html="name">Name</label>
              <Field 
                type="text" 
                placeholder="name" 
                name="name" 
                id="name" 
              />
              <ErrorMessage name="name" component={FieldErrorMessage} />
            </div>

            <div className="profile_field wow fadeInUp">
              <label htmlFor="Country">country</label>
              <div className="input_wrap">
                <Field
                  type="text"
                  readOnly
                  placeholder="Select"
                  name="country"
                  className="dd"
                  onClick={ddToggler}
                  
                />
                <div className={`option_wrap ${ddStatus ? "open" : "close"}`}>
                  {countryList.map((data) => {
                    return (
                      <label className={`option`} key={data.id}>
                        {data.name}
                        <Field type="radio" name="country" value={data.name} />
                      </label>
                    );
                  })}
                </div>
              </div>
              <ErrorMessage name="country" component={FieldErrorMessage} />
            </div>
          </div>

          <div className="profile_field wow fadeInUp">
            <label htmlFor="bio">Bio</label>
            <Field type="text" placeholder="Add Bio..." name="bio" id="bio" />
            <ErrorMessage name="bio" component={FieldErrorMessage} />
          </div>

          <div className="profile_field wow fadeInUp">
            <label htmlFor="profile">Profile</label>

            <div className="file_wraper">
              <div className="overlay">
                <CgProfile />
                <p>Add Profile</p>
              </div>
              <Field type="file" name="profile" id="profile" />
            </div>
            <ErrorMessage name="profile" component={FieldErrorMessage} />
          </div>

          <div className="btn_line">
            {Loader ? (
              <button
                type="button"
                className="authbtn auth_primary wow fadeInUp"
                disabled
              >
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className="authbtn auth_primary wow fadeInUp"
              >
                Save
              </button>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Accounts;
