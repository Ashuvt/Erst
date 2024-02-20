import { resetAllToggler } from "../../../store/actions";
import { useEffect, useState } from "react";
import { images } from "../../../utils/images/images";
import "./WelComeStrip.scss";
import { useDispatch } from "react-redux";
import WOW from "wow.js";

const WelComeStrip = ({ title, text }) => {
  const [titleText, setTitleText] = useState("");

  useEffect(() => {
    const wow = new WOW();
    wow.init();

    const name = localStorage.getItem("name")

    let currentIndex = 1;
    let direction = true;

    const typingTimer = setInterval(() => {

      if(currentIndex == title.length + 1){
        direction = false;
      }
      if(currentIndex == 1){
        direction = true;
      }

      if (currentIndex <= title.length && direction) {
        setTitleText(title.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTitleText(title.slice(0, currentIndex));
        currentIndex--;
      }

    }, 200); // Adjust the typing speed (in milliseconds) here
    return () => clearInterval(typingTimer);

  }, []);

  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  return (    
    <section className="welcome_strip" onClick={resetToggler}>    
      <div className="screen_container">
        <h1 className="wow fadeInUp">{titleText}</h1>
        <p className="wow fadeInUp">{text}</p>
      </div>
    </section>
  );
};

export default WelComeStrip;
