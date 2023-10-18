import { useEffect } from "react";
import "./Features.scss";
import WOW from "wow.js";

const Features = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <section className="features p_top p_bottom">
      <div className="content_wrap">
        <div className="card active a wow slideInUp">
          <h5>Data Management</h5>
          <p>
            The platform should offer robust data management capabilities that
            allow users to import, store, and manage data from a variety of
            sources. This could include features like data cleansing, data
            normalization, and data transformation.
          </p>
        </div>
        <div className="card b wow slideInUp">
          <h5>Data Mining</h5>
          <p>
            Offer sophisticated data mining capabilities that allow users to
            extract valuable insights from large and complex datasets. This
            could include algorithms for clustering, association analysis, and
            text mining.
          </p>
        </div>

        <div className="card c wow slideInUp">
          <h5>Data Security</h5>
          <p>
            Offer robust data security features to protect sensitive data and
            ensure compliance with relevant regulations. This could include
            features like encryption, access controls, and data backup and
            recovery.
          </p>
        </div>
        <div className="card d wow slideInUp">
          <h5>Data Visualization</h5>
          <p>
            Provide a range of data visualization tools that allow users to
            explore and analyze data in a visually appealing way. This could
            include interactive charts, graphs, and maps that users can
            customize and share.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
