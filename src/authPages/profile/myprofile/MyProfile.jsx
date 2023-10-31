import { Fragment } from "react";
import { icon } from "../../../utils/images/icons";
import { images } from "../../../utils/images/images";
import FourBoxInfo from "../../components/fourboxinfo/FourBoxInfo";
import "./MyProfile.scss";
import YourCertificateCard from "./yourcertificatecard/YourCertificateCard";

const MyProfile = () => {
  const fourBoxData = [
    {
      id: 0,
      icon: icon.module,
      title: "36 Modules",
      text: "Get a certificate on completing the course. You can share it on your LinkedIn.",
    },
    {
      id: 1,
      icon: icon.courses,
      title: "09 Courses",
      text: "Across courses, you’ll get to test yourself within 10 quizzes and 5 projects.",
    },
    {
      id: 2,
      icon: icon.clock,
      title: "26h Learning Time",
      text: "Get in groups with other students and exchange ideas.",
    },
    {
      id: 3,
      icon: icon.quizandproject,
      title: "24 Quizzes",
      text: "Across courses, you’ll get to test yourself within 10 quizzes and 5 projects.",
    },
  ];

  const certificateData = [
    {
      id: 0,
      img: images.skillPath,
      title: "Course Name",
      text: "Your certificate is ready to be downloaded.",
    },
    {
      id: 1,
      img: images.skillPath,
      title: "Course Name",
      text: "Your certificate is ready to be downloaded.",
    },
  ];

  return (
    <div className="my_profile_screen">
      <div className="title">
        <h5 className="small_title wow fadeInUp">My Profile</h5>
        <p className=" wow fadeInUp">Manage your progress and certificates</p>
      </div>
      <FourBoxInfo title="Your Roadmap" data={fourBoxData} />

      <h5 className="small_title wow fadeInUp">Your Certificates</h5>

      {certificateData &&
        certificateData.map((data) => {
          return (
            <Fragment key={data.id}>
              <YourCertificateCard {...data} />
            </Fragment>
          );
        })}
    </div>
  );
};

export default MyProfile;
