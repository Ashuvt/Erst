import { useState, useEffect, useRef } from "react";
import "./ContactServices.scss";
import { icons, images } from "../../../utils/images/images";
import ContactServiceCard from "./contactservicecard/ContactServiceCard";
import { Fragment } from "react";

const Services = () => {
  const [degree, setDegree] = useState(0);
  const [num, setNum] = useState(0);

  const divRef = useRef(null);

  const contactServiceData = [
    {
      id: "first",
      title: "Our Advantages Are Availability",
      text: "The Intelligent Analytics Suite provides real-time monitoring and alerts, allowing businesses to track their key performance indicators (KPIs) in real-time and receive alerts when KPIs deviate from predefined thresholds. This enables businesses to react quickly to any changes or issues that arise, reducing the risk of any potential negative impact on their operations or customers.",
      btn1: "view our pricing",
      btn2: "try free now",
    },
    {
      id: "second",
      title: "Improved Interface Usability",
      text: "The Intelligent Analytics Suite allows businesses to analyze data from various sources to identify bottlenecks, inefficiencies, and areas for improvement in their processes, supply chain, and operations. This leads to improved operational efficiency, cost savings, and faster delivery times. This enables businesses to react quickly to any changes or issues that arise, reducing the risk of any potential negative impact on their operations or customers.",
      btn1: "testimonials",
      btn2: "join our team",
    },
    {
      id: "third",
      title: "Real-Time Decision Making",
      text: "The Intelligent Analytics Suite provides businesses with real-time insights and intelligence, allowing them to make informed decisions in real-time based on actual data rather than relying on historical data or assumptions. This enables businesses to react quickly to any changes or issues that arise, reducing the risk of any potential negative impact on their operations or customers.",
      btn1: "how we work",
      btn2: "help and support",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      if (div) {
        console.log(window.scrollY);

        if (window.scrollY < 600) {
          setDegree(0);
          setNum(0);
        }

        if (window.scrollY > 600 && window.scrollY < 1200) {
          setDegree(15);
          setNum(15)
        }

        if (window.scrollY > 1200 && window.scrollY < 1500) {
          setDegree(30);
          setNum(30)
        }

        if (window.scrollY > 1500 && window.scrollY < 1800) {
          setDegree(45);
          setNum(45)
        }

        if (window.scrollY > 1800 && window.scrollY < 2000) {
          setDegree(60);
          setNum(65)
        }

        if (window.scrollY > 2000 && window.scrollY < 2200) {
          setDegree(75);
          setNum(80)
        }

        if (window.scrollY > 2200 && window.scrollY < 2600) {
          setDegree(90);
          setNum(100)
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="contact_services" ref={divRef}>
      <div className="content_wrap">
        <div className="img_wrap">
          <div
            className="bg"
            style={{ transform: `translate(-50%, -50%) rotate(${degree}deg)` }}
          ></div>
          <img src={images.mobiles} alt="mobiles" />

          <div className="scroll_progress">
              <p>SERVICES</p>
              <div className="progress_line">
                <div className="filler" style={{width:`${num}%`}}>

                </div>
              </div>
              <a href="#map"> skip
                <img src={icons.whiteArrow} alt="arrow" />
                </a>
          </div>
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
