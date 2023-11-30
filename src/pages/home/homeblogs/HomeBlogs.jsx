import { useState,Fragment,useEffect } from "react";
import "./HomeBlogs.scss";
import MidTitle from "../../../components/midtitle/MidTitle";
import Pill from "../../../components/pill/Pill";
import { images } from "../../../utils/images/images";
import HomeBlogCard from "./blogcard/HomeBlogCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../utils/data/data";

const HomeBlogs = ({t}) => {

  const [blogDatas, setBlogData] = useState([]);
  const [blogsData, setallBlogData] = useState([]);
  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 

  const getMainBlog = async () => {
    try {
      
      setError(null);

      const response = await axios.get(`${baseUrl}/homemainblog`);
      
      setBlogData(response.data.data);

      // You can do more with the response if needed

    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getallBlogs = async () => {
    try {
      
      setError(null);

      const response = await axios.get(`${baseUrl}/homeblog`);
      
      setallBlogData(response.data.data);

      // You can do more with the response if needed

    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  
useEffect(() => {
  getMainBlog();
  getallBlogs();
}, [])

const navigate = useNavigate();

  return (
    <section className="home_blog p_bottom ">
      <div className="content_wrap p_top">
        <MidTitle
          title={t('homeBlogTopTitle')}
          text=""
        />
        {/* Blog Grid */}
        <div className="home_blog_grid">
          <div className="left wow fadeInUp">
            <div className="blog_view">
              <div className="overlay"></div>
              <img src={images.homeblogD} alt="banner" />
            </div>
            <div className="blog_content_box">
              <Pill text={t('homeBlogMainLabel')} />
              <h4>
              {blogDatas.title}
              </h4>
              <div dangerouslySetInnerHTML={{ __html: blogDatas.small_description }} />
             {/* <p>{blogDatas.small_description}</p> */}
              <div className="btn_line">
                <button type="buton" className="secondarybtn" onClick={() => navigate("/blogs")}>
                <p>{t('homeBlogMainBtn')}</p>
                </button>
              </div>
            </div>
          </div>
          <div className="all_blogs">
            {
            blogsData && blogsData.map((data, k) => {
                return(
                  <Fragment key={data._id}>
                    <HomeBlogCard {...data} index={k} />
                  </Fragment>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;
