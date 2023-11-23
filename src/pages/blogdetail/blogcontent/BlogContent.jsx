import { images } from "../../../utils/images/images";
import FeedGrid from "../../home/feedback/feedgrid/FeedGrid";
import "./BlogContent.scss";
import { blogsData } from "../../../utils/data/data";
import { Fragment } from "react";

const BlogContent = ({ para }) => {
  return (
    <section className="blog_content p_top" id="blogContent" >
      <div className="content_wrap">
        <h2 className="wow fadeInUp">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit?
        </h2>
        <p className="wow fadeInUp">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, sit.
          Cupiditate, suscipit maxime impedit totam vero quos adipisci ut quas
          labore eum hic dolor quibusdam necessitatibus? Libero vero ea
          laboriosam quasi dolorum pariatur. Cum nam quisquam cupiditate vel
          porro velit enim obcaecati voluptate quia ullam!
        </p>
        <h3 className="wow fadeInUp">Lorem ipsum dolor, sit amet</h3>
        <p className="wow fadeInUp">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, sit.
          Cupiditate, suscipit maxime impedit totam vero quos adipisci ut quas
          labore eum hic dolor quibusdam necessitatibus? Libero vero ea
          laboriosam quasi dolorum pariatur. Cum nam quisquam cupiditate vel
          porro velit enim obcaecati voluptate quia ullam!
        </p>
        <div className="blog_image wow fadeInUp">
          <img src={images.benefitSuite} alt="banner" />
        </div>
        <p className="wow fadeInUp">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, sit.
          Cupiditate, suscipit maxime impedit totam vero quos adipisci ut quas
          labore eum hic dolor quibusdam necessitatibus? Libero vero ea
          laboriosam quasi dolorum pariatur. Cum nam quisquam cupiditate vel
          porro velit enim obcaecati voluptate quia ullam!
        </p>

        <ul className="wow fadeInUp">
          <li>
            Lorem ipsum, dolor sit: Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde, sit. Cupiditate, suscipit maxime impedit
            totam.
          </li>
          <li>
            Lorem ipsum, dolor sit: Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde, sit. Cupiditate, suscipit maxime impedit
            totam.
          </li>
          <li>
            Lorem ipsum, dolor sit: Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde, sit. Cupiditate, suscipit maxime impedit
            totam.
          </li>
          <li>
            Lorem ipsum, dolor sit: Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde, sit. Cupiditate, suscipit maxime impedit
            totam.
          </li>
          <li>
            Lorem ipsum, dolor sit: Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde, sit. Cupiditate, suscipit maxime impedit
            totam.
          </li>
        </ul>
        <p className="wow fadeInUp">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, sit.
          Cupiditate, suscipit maxime impedit totam vero quos adipisci ut quas
          labore eum hic dolor quibusdam necessitatibus? Libero vero ea
          laboriosam quasi dolorum pariatur. Cum nam quisquam cupiditate vel
          porro velit enim obcaecati voluptate quia ullam!
        </p>
        <div className="feed_grid_wrap">
          <div
            className="border_line top wow zoomIn"
            data-wow-delay="0.5s"
            data-wow-duration="1.5s"
          ></div>
          <FeedGrid
            data={{
              id: 0,
              name: "Alaa",
              text: "SOC Analyst at Kan11",
              profile: images.profilea,
              testimonial:
                "My experience with them was truly incredible. Over the course of a year with the company, I had the opportunity to immerse myself in the world of real-life cybersecurity attacks. Despite the complexity of the field, they skillfully guided us through the learning process, breaking it down into manageable steps as we progressed to an advanced level.",
            }}
          />
          <div
            className="border_line bottom wow zoomIn"
            data-wow-delay="0.5s"
            data-wow-duration="1.5s"
          ></div>
        </div>
        <h3 className="wow fadeInUp">Lorem ipsum dolor sit.</h3>
        <p className="wow fadeInUp">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, reprehenderit! Eos saepe animi soluta cupiditate, ipsum aspernatur deleniti inventore quos eum vero modi fugit mollitia officia repudiandae ut. Magnam quidem maxime ut aliquam rerum amet nemo odit veniam itaque porro. Repellat consequatur ea minima modi ipsa! Expedita autem animi ipsa!
        </p>
        <ul className="wow fadeInUp">
          <li>Lorem ipsum dolor: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>
          <li>Lorem ipsum dolor: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>
          <li>Lorem ipsum dolor: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>
          <li>Lorem ipsum dolor: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>
          <li>Lorem ipsum dolor: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>          
        </ul>

        <h3 className="wow fadeInUp">Lorem ipsum dolor sit amet, consectetur</h3>
        <p className="wow fadeInUp">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, reprehenderit! Eos saepe animi soluta cupiditate, ipsum aspernatur deleniti inventore quos eum vero modi fugit mollitia officia repudiandae ut. Magnam quidem maxime ut aliquam rerum amet nemo odit veniam itaque porro. Repellat consequatur ea minima modi ipsa! Expedita autem animi ipsa!
        </p>
      </div>
      <div
        className="primary_glass first wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>

      <div
        className="primary_glass second wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>

      <div
        className="primary_glass third wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>

      <div
        className="secondary_glass wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
    </section>
  );
};

export default BlogContent;
