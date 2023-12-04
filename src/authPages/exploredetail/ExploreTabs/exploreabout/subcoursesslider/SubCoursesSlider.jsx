import "./SubCoursesSlider.scss";
import { Fragment, useRef } from "react";
import Slider from "react-slick";
import { images } from "../../../../../utils/images/images";
import ExploreCard from "../../../../components/explorecard/ExploreCard";

const SubCoursesSlider = () => {
  const courcesData = [
    {
      id: 0,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 1,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 2,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 3,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 4,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 5,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 6,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 7,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 8,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 9,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 10,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 11,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: true,

    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint:600,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
          infinite: true,
          dots: true
        }
      },   
    
    ]
  };

  const handleMouseWheel = (e) => {
    console.log("done");
    console.log(e);
    if (e.deltaY > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <Fragment>
      <div className="sub_courses_slider_wrap" id="skillpath">
        <div className="title">
          <h5 className="small_title">Start your journey</h5>
          <p>Be job ready in red field</p>
        </div>

        <div  className="module_slide_wrap">
          <Slider ref={sliderRef}  {...settings}   >

            {courcesData.map((data) => {
              return (
                <Fragment key={data.id}>
                  <div className="slide_card" onWheel={handleMouseWheel}>
            
                    <div className="card_cover">
                    <ExploreCard {...data} saved={true} />
                    </div>
                    <div className="v_line a"></div>
                    <div className="v_line b"></div>
                    <div className="v_line c"></div>
                    <div className="h_line"></div>
                  </div>
                </Fragment>
              );
            })}
          </Slider>
        </div>
      </div>
    </Fragment>
  );
};

export default SubCoursesSlider;
