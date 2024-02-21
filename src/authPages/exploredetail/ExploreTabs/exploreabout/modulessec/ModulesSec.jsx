import "./ModulesSec.scss";
import { Fragment } from "react";
import { icon } from "../../../../../utils/images/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ModulesSec = ({courseId}) => {


  const { courseDetailLoading, courseDetailData, courseDetailError } =
    useSelector((state) => state?.getExploreDetailByIdApi);

  const navigate = useNavigate();

  return (
    <Fragment>
      
      {courseDetailLoading ? (
     <div className="spinner-border text-primary" role="status"></div>
      ) : (
        <div className="module_sec" id="courses">
          <h5 className="small_title">Modules</h5>
          {
          courseDetailData?.module?.length > 0 ?
          courseDetailData?.module.map((data) => {
            return (
              <Fragment key={data._id}>
                <div className="module_info wow fadeInUp">
                  <div className="left">
                    <img src={icon.docs} alt="icon" />
                    <div className="info">
                      <p className="small_text text">{data?.module_name}</p>
                      {/* <p className="small_text">{data.duration}</p> */}
                      {data.is_free === "free" && (
                        <button type="button" className="free_btn">
                          Free
                        </button>
                      )}
                    </div>
                  </div>

                  {data.is_free === "free" && (
                    <button
                      type="button"
                      className="authbtn auth_primary"
                      onClick={() => navigate(`/chapterdetail/${courseId}`)}
                    >
                      Free
                    </button>
                  )}
                  {data.is_free === "subscribe" && (
                    <button type="button" className="authbtn auth_secondary">
                      Subscribe
                    </button>
                  )}
                </div>
              </Fragment>
            );
          })
        
        : <p>Data Does Not Found...</p>
        }
        </div>
      )}
    </Fragment>
  );
};

export default ModulesSec;
