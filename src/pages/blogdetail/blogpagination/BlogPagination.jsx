import { icons } from "../../../utils/images/images";
import "./BlogPagination.scss";
import { baseUrl, getAllBlogs } from "../../../utils/apidata";
import { useEffect, useState, useContext } from "react";
import { redirectContext } from "../../../context/RoutingContext";
import axios from "axios";

const BlogPagination = ({ currentId }) => {
  const { goToBlogDetail } = useContext(redirectContext);

  const [blogData, setBlogData] = useState(null);
  const [prevId, setPrevId] = useState("");
  const [nextId, setNextId] = useState("");
  const [prevTitle, setPrevTitle] = useState("");
  const [nextTitle, setNextTitle] = useState("");

  const getAllBlogsApi = async () => {
    console.log("Pass From");
    try {
      const response = await axios.get(`${baseUrl}/${getAllBlogs}`);      
      if (response.data.success) {
        setBlogData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogsApi();
  }, [currentId]);

  useEffect(() => {
    const index = blogData?.findIndex((obj) => obj._id === currentId);
    if (blogData?.length > 0) {
      if (index === 0) {
        setPrevId("");
        setPrevTitle("No More Data Found...");
      } else {
        setPrevId(blogData[index - 1]._id);
        setPrevTitle(blogData[index - 1].title);
      }

      if (index >= blogData?.length - 1) {
        setNextId("");
        setNextTitle("No More Data Found...");
      } else {
        setNextId(blogData[index + 1]._id);

        setNextTitle(blogData[index + 1].title);
      }
    }
  }, [blogData, currentId]);

  return (
    <section className="blog_pagination p_top p_bottom">
      <div className="content_wrap">
        <div
          className={`prev wow fadeInLeft ${prevId ? "" : "disable"}`}
          onClick={() => goToBlogDetail(prevId)}
        >
          <img src={icons.whiteArrow} alt="arrow" />
          <p>Previous Post</p>
          <h5>{prevTitle}</h5>
        </div>
        <div
          className={`next wow fadeInRight ${nextId ? "" : "disable"}`}
          onClick={() => goToBlogDetail(nextId)}
        >
          <img src={icons.whiteArrow} alt="arrow" />
          <p>Next Post</p>
          <h5>{nextTitle}</h5>
        </div>
      </div>
      <div className="primary_glass wow zoomIn"></div>
    </section>
  );
};

export default BlogPagination;
