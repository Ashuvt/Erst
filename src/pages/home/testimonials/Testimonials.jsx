import { Fragment, useEffect, useState } from "react";
import { images } from "../../../utils/images/images";
import "./Testimonials.scss";
import FeedBackCard from "./feedbackcard/FeedBackCard";
import FeedGrid from "./feedgrid/FeedGrid";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import axios from "axios";
import { baseUrl, getTestimonial } from "../../../utils/apidata";

const Testimonials = ({ t }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(false);



  const l = useSelector((state) => state.langReducer.lang);

  const [view, setView] = useState({});

  const getTestimonials = async () => {
    try {
      setLoader(true);
      const response = await axios.get(`${baseUrl}/${getTestimonial}`);

      if (response?.data?.success) {
        setList(response?.data?.data);
        setView(response?.data?.data[0]);
        setLoader(false);
      }
    } catch (error) {
      console.log("ERR", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <section className="feed_back p_bottom">
      <div className="content_wrap p_top">
        {loader ? (
          <div className="error_sec">
            <p>Loading...</p>
          </div>
        ) : (
          <Fragment>
            <FeedGrid data={view} t={t} />
            <div className="feedback_list">
              <Slider {...settings}>
                {list.length > 0 &&
                  list.map((data, j) => {
                    return (
                      <Fragment key={data._id}>
                        <div className="testimonial_info">
                          <FeedBackCard
                            data={data}
                            index={j}
                            setView={setView}
                          />
                        </div>
                      </Fragment>
                    );
                  })}
              </Slider>
            </div>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
