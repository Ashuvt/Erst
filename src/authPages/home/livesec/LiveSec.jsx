import LiveCard from "../../components/livecard/LiveCard";
import "./LiveSec.scss";
import { Fragment } from "react";
import { images } from "../../../utils/images/images";
import { icon } from "../../../utils/images/icons";
import ModuleTitle from "../../components/moduletitle/ModuleTitle";

const LiveSec = () => {
  const data = [
    {
      id: 0,
      title: "Webinar name",
      text: "A short description about the webinar, it can be in two lines.",
      img: images.teacher,
    },
    {
      id: 1,
      title: "Webinar name",
      text: "A short description about the webinar, it can be in two lines.",
      img: images.teacher,
    },
  ];

  return (
    <Fragment>
      <ModuleTitle
        title="Live"
        text="There are some live webinars happening right now, Tune in to learn and exchange ideas with professional."
        btntext="16+ Live"
        icon={icon.blueRightArrow}
      />
      <div className="live_sec_module">
        {data.map((data) => {
          return (
            <Fragment key={data.id}>
              <LiveCard {...data} />
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default LiveSec;
