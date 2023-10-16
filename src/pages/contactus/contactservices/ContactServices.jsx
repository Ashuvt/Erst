import "./ContactServices.scss";
import { images } from "../../../utils/images/images";
import ContactServiceCard from "./contactservicecard/ContactServiceCard";
import { Fragment } from "react";

const Services = () => {
  const contactServiceData = [
    {
      id: 0,
      title: "Our Advantages Are Availability",
      text: "The Intelligent Analytics Suite provides real-time monitoring and alerts, allowing businesses to track their key performance indicators (KPIs) in real-time and receive alerts when KPIs deviate from predefined thresholds. This enables businesses to react quickly to any changes or issues that arise, reducing the risk of any potential negative impact on their operations or customers.",
      btn1: "view our pricing",
      btn2: "try free now",
    },
    {
      id: 1,
      title: "Improved Interface Usability",
      text: "The Intelligent Analytics Suite allows businesses to analyze data from various sources to identify bottlenecks, inefficiencies, and areas for improvement in their processes, supply chain, and operations. This leads to improved operational efficiency, cost savings, and faster delivery times. This enables businesses to react quickly to any changes or issues that arise, reducing the risk of any potential negative impact on their operations or customers.",
      btn1: "testimonials",
      btn2: "join our team",
    },
    {
      id: 2,
      title: "Real-Time Decision Making",
      text: "The Intelligent Analytics Suite provides businesses with real-time insights and intelligence, allowing them to make informed decisions in real-time based on actual data rather than relying on historical data or assumptions. This enables businesses to react quickly to any changes or issues that arise, reducing the risk of any potential negative impact on their operations or customers.",
      btn1: "how we work",
      btn2: "help and support",
    },
  ];

  return (
    <section className="contact_services">
      <div className="content_wrap">
        <div className="img_wrap">
          <div className="bg"></div>
          <img src={images.mobiles} alt="mobiles" />
        </div>
        <div className="service_list">
          {contactServiceData.map((data) => {
            return (
              <Fragment key={data.id}>
                <ContactServiceCard {...data} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
