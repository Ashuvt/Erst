import { Fragment, useContext, useState } from "react";
import "./ExploreTabs.scss";
import ExploreAbout from "./exploreabout/ExploreAbout";
import { useDispatch, useSelector } from "react-redux";
import { resetAllToggler } from "../../../store/actions";

const ExploreTabs = ({ recallPage, courseId }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const { courseDetailLoading, courseDetailData, courseDetailError } =
    useSelector((state) => state?.getExploreDetailByIdApi);

  const dispatch = useDispatch();
  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  return (
    <Fragment>
      <section className="tabs_sec" onClick={resetToggler}>
        <div className="scree_container tabs_btns">
          {/* {tabData.map((data) => {
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
          })} */}

          <button className="tab" onClick={() => scrollToSection("about")}>
            About
          </button>

          {courseDetailData?.is_course === "course" && (
            <Fragment>
              <button
                className="tab"
                onClick={() => scrollToSection("courses")}
              >
                Modules
              </button>

              <button
                className="tab"
                onClick={() => scrollToSection("reviews")}
              >
                Recommended
              </button>
            </Fragment>
          )}

          {courseDetailData?.is_course === "bundle" && (
            <button className="tab" onClick={() => scrollToSection("roadmap")}>
              Roadmap
            </button>
          )}
        </div>
      </section>
      <ExploreAbout recallPage={recallPage} courseId={courseId} />
    </Fragment>
  );
};

export default ExploreTabs;
