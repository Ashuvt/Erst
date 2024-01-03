import { Fragment } from "react";
import "./FeedGrid.scss";
import { icons, images } from "../../../../utils/images/images";
import { useSelector } from "react-redux";
import { baseUrl } from "../../../../utils/apidata";

const FeedGrid = ({ data, t }) => {

  const l = useSelector(state => state.langReducer.lang);

  return (
    <Fragment>
      <div className="feed_greed">
        <div className="feed">
          <h5 className="wow fadeInUp">{data?.name}</h5>
          <p className="wow fadeInUp">{data?.position}</p>
          <div className="ratings wow fadeInUp">
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
          </div>
          <p className="feed_text wow fadeInUp">"{data?.description}"</p>
        </div>
        <div className="feed_video wow fadeInUp" style={['ar', 'he'].includes(l) ? {order:-1} : {}}>
          <div className="img_wraper">
            <div className="overlay"></div>
            <img src={`${baseUrl}/${data?.image}`} alt="feed" />
          </div>
        </div>
        <div className="primary_blur"></div>
      </div>
    </Fragment>
  );
};

export default FeedGrid;
