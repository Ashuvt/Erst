import { Fragment, useState } from "react";
import "./ExploreTabs.scss";
import ExploreAbout from "./exploreabout/ExploreAbout";

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
      {tab === 0 && <ExploreAbout />}
      {tab === 1 && <ExploreAbout />}
      {tab === 2 && <ExploreAbout />}
      {tab === 3 && <ExploreAbout />}
      

    </Fragment>
  );
};

export default ExploreTabs;
