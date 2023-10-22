import { useEffect, useState } from "react";
import "./BenefitsOfSuite.scss";
import LeftScreen from "./left/LeftScreen";
import RightScreen from "./right/RightScreen";

const BenefitsOfSuite = () => {
  // false : show Left Screen
  // true : show Right Screen
  
  const [side, setSide] = useState(false);

  return (
    <div className="screen_wrap">
      <div className="left_right_wrap" style={{transform:`translateX(${side ? -50 : 0}%)`}}>
        <LeftScreen side={side} setSide={setSide} />
        <RightScreen side={side} setSide={setSide} />
      </div>
    </div>
  );
};

export default BenefitsOfSuite;
