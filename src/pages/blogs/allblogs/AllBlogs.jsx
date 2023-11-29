import "./AllBlogs.scss";
import { icons, images } from "../../../utils/images/images";
import { useState, useEffect, useContext } from "react";
import Pill from "../../../components/pill/Pill";
import CircleArrowBtn from "../../../components/circlearrowbtn/CircleArrowBtn";
import axios from "axios";
import { baseUrl } from "../../../utils/data/data";
import { redirectContext } from "../../../context/RoutingContext";
import Loader from "../../../components/loader/Loader";

const AllBlogs = () => {

  const {goToBlogDetail} = useContext(redirectContext);

  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${baseUrl}/getblogs`);
      setBlogData(response.data.data);
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  
useEffect(() => {
  getBlogs();
}, [])

  return (
    <section className="tech_blog p_top p_bottom">
      <div className="content_wrap">
        {blogData &&
          blogData.map((data) => {
            return (
              <div className="blog_wrap" key={data._id}>
                <div className="overlay"></div>
                <div className="overlay_color"></div>
                <img src={`${baseUrl}/${data.image}`} alt="blogBanner" className="banner" />
                <div className="content">
                  <div className="top">
                    <Pill text={data.flag} />
                  </div>
                  <div className="bottom_wrap">
                    <div className="bottom">
                      <div className="text">
                        <h6>{data.date}</h6>
                        <h5>{data.title}</h5>
                      </div>
                      <div className="btn_line">
                        <div className="line"></div>
                        <CircleArrowBtn clickHandler={() => goToBlogDetail(data._id)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        } 

        {loading && <Loader />}
      </div>
  
    </section>
  );
};

export default AllBlogs;
