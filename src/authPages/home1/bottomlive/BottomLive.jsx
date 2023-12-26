import "./BottomLive.scss";
import { images } from "../../../utils/images/images";
import { Fragment } from "react";
import { baseUrl } from "../../../utils/apidata";

const BottomLive = ({dataList}) => {
 


  console.log("LIST::", dataList);
  return (
    <div className="home_bottom_live">
      {dataList.length > 0 ? dataList.map((data, k) => {
        return (
          <Fragment key={data._id}>
          <div className="live_card wow fadeInUp" data-wow-delay={`${0.15*k}s`} >
            <div className="img_wrap">
              <img src={`${baseUrl}/${data.image}`} alt="poster" />
            </div>
            <h5 className="small_title">{data.name}</h5>
          </div>  
          </Fragment>
        );
      })
    : <p>Data Not Found...</p>
    }
    </div>
  );
};

export default BottomLive;
