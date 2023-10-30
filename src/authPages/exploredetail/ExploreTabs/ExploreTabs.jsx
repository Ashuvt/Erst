import { Fragment, useState } from "react";
import "./ExploreTabs.scss";
import ExploreAbout from "./exploreabout/ExploreAbout";
import { transform } from "framer-motion";

const ExploreTabs = () => {
  const tabData = [
    {
      id: 0,
      tab: "About",
    },
    {
      id: 1,
      tab: "Courses",
    },
    {
      id: 2,
      tab: "Related Skill Paths",
    },
    {
      id: 3,
      tab: "Reviews",
    },
  ];

  const [tab, setTab] = useState(tabData[0].id);

  return (
    <Fragment>
      <section className="tabs_sec">
        <div className="scree_container tabs_btns">
          {tabData.map((data) => {
            return (
              <Fragment key={data.id}>
                <button
                  type="button"
                  className={`tab ${tab === data.id ? "active" : ""}`}
                  onClick={() => setTab(data.id)}
                >
                  {data.tab}
                </button>
              </Fragment>
            );
          })}
        </div>
      </section>
      <div className="tab_content_slidebox">
        <div
          className="tab_slide"
          style={{ transform: `translateX(-${tab * 100}%)` }}
        >
          <ExploreAbout />
          <ExploreAbout />
          <ExploreAbout />
          <ExploreAbout />
        </div>
      </div>
    </Fragment>
  );
};

export default ExploreTabs;
