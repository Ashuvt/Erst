import { Fragment, useEffect, useState } from "react";
import BlogBanner from "./blogbanner/BlogBanner";
import BlogContent from "./blogcontent/BlogContent";
import BlogDetailLanding from "./blogdetaillanding/BlogDetailLanding";
import BlogPagination from "./blogpagination/BlogPagination";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import WOW from "wow.js";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import PreLoginLayout from "../../layouts/preloginlayout/PreLoginLayout";
import { baseUrl } from "../../utils/data/data";
import Loader from "../../components/loader/Loader";

const BlogDetail = () => {
  const { id } = useParams();

  const [blogDetail, setBlogDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBlogDetail = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `${baseUrl}/blogdetails/${id}`
      );
      if (response.status === 200) {
        setBlogDetail(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message || "An error occurred");
    }
  };

  useEffect(() => {
    if (id) {
      getBlogDetail();
    }

    const wow = new WOW();
    wow.init();
  }, [id]);

  return (
    <Fragment>
      <PreLoginLayout>
        {loading && <Loader />}
        {!loading && (
          <Fragment>
            <BlogDetailLanding
              title={blogDetail?.title}
              text={blogDetail?.small_description}
              date={blogDetail?.createdAt}
            />
            <BlogBanner img={`${baseUrl}/${blogDetail?.image}`} />
            <BlogContent content={blogDetail?.description} />
            <BlogPagination currentId={id} />
          </Fragment>
        )}
      </PreLoginLayout>
    </Fragment>
  );
};

export default BlogDetail;
