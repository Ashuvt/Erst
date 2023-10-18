import { useEffect, useState } from "react";
import { icons, images } from "../../../utils/images/images";
import "./BenefitsOfSuite.scss";
import LeftScreen from "./left/LeftScreen";
import RightScreen from "./right/RightScreen";

const BenefitsOfSuite = () => {
  // true : show Left Screen
  // false : show Right Screen
  const [side, setSide] = useState(true);
  useEffect(() => {
    console.log(side);
  }, [side]);
  return (
    <div className="screen_wrap">
      <div className="left_right_wrap" style={{transform:`translateX(${side ? -50 : 0}%)`}}>
        <LeftScreen setSide={setSide} />
        <RightScreen setSide={setSide} />
      </div>
    </div>
  );
};

export default BenefitsOfSuite;
