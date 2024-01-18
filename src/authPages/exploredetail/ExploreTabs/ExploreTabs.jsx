import { Fragment, useState } from "react";
import "./ExploreTabs.scss";
import ExploreAbout from "./exploreabout/ExploreAbout";
import { transform } from "framer-motion";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../../store/actions";




const ExploreTabs = ({instructors}) => {


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };



  const tabData = [
    {
      id: 0,
      tab: "About",
      target:"about"
    },
    {
      id: 1,
      tab: "Courses",
      target:"courses",
    },
    {
      id: 2,
      tab: "Related Skill Paths",
      target:"skillpath",
    },
    {
      id: 3,
      tab: "Reviews",
      target:"reviews",
    },
  ];

  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  return (
    <Fragment>
      <section className="tabs_sec" onClick={resetToggler}>
        <div className="scree_container tabs_btns">
          {tabData.map((data) => {
            return (
              <Fragment key={data.id}>
                <button
                    href={data.target}
                    className="tab"
                    onClick={() => scrollToSection(data.target)}
                >
                  {data.tab}
                </button>
              </Fragment>
            );
          })}
        </div>
      </section>
        
          <ExploreAbout instructors={instructors} />
    </Fragment>
  );
};

export default ExploreTabs;
