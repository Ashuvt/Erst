import "./LiveVideoGrid.scss";
import LiveCard from "../../components/livecard/LiveCard";
import { Fragment } from "react";

const LiveVideoGrid = ({ videoData }) => {
  return (
    <div className="live_video_grid">
      {videoData &&
        videoData.map((data) => {
          return (
            <Fragment key={data.id}>
              <LiveCard {...data}/>
            </Fragment>
          );
        })}
    </div>
  );
};
export default LiveVideoGrid;
