import { Fragment } from "react";
import "./Groups.scss";
import CoursesHeader from "../components/coursesheader/CoursesHeader";
import LiveSecTitle from "../live/livesectitle/LiveSecTitle";
import { images } from "../../utils/images/images";
import GroupCard from "../components/groupcard/GroupCard";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";

const Groups = () => {
  const groupData = [
    {
      id: 0,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 1,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 2,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 3,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 4,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 5,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 6,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 7,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 8,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 9,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 10,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 11,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 12,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 13,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 14,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 15,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 16,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 17,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 18,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
    {
      id: 19,
      img: images.groups,
      title: "Group Name",
      text: "Keyword, CEH, Keyword are some of the popular discussion.",
      members: 800,
      newpost: 2,
    },
  ];

  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({type:resetAllToggler()});
  }


  return (
    <Fragment>      
      <CoursesHeader />
      <div className="header_filler"></div>
      <section className="groups_page" onClick={resetToggler}>
        <div className="screen_container">
          <LiveSecTitle
            title="Recommended"
            text="There are some live webinars happening right now, Tune in to learn and exchange ideas with professional."
          />
          <div className="groups_grid">
            {groupData.map((data, k) => {
              return (
                <Fragment key={data.id}>
                  <GroupCard {...data} index={k} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Groups;
