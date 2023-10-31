import { useEffect, useState, useRef } from "react";
import "./ContactServiceCard.scss";

const ContactServiceCard = ({ title, text, btn1, btn2, id, setAngle }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

let viewArray;

  useEffect(() => {   

    const options = {
        root: null,
        rootMargin: '-300px 0px -300px 0px', // Adjust this value to set the top and bottom margins
        threshold: 0,
      };

      const observer = new IntersectionObserver(
        ([entry]) => {                
          if (entry.isIntersecting) {
            setIsVisible(true);
            console.log("true");
          
          } else {
            setIsVisible(false);
            console.log("false");
          }
        },
        options
      );
  
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
  
      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };  

  }, []);



  return (
    <div className="contact_service_card" ref={cardRef} id={id} style={{opacity : isVisible ? 1 : 0}} >
      <h2 className="wow fadeInUp">{title}</h2>
      <p className="wow fadeInUp">{text}</p>
      <div className="btn_line">
        <button type="button" className="secondarybtn wow fadeInUp">
          {btn1}
        </button>
        <button type="button" className="primarybtn wow fadeInUp">
          {btn2}
        </button>
      </div>
    </div>
  );
};

export default ContactServiceCard;
