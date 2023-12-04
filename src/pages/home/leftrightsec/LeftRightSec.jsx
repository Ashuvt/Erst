import { useEffect, useState } from "react";
import "./LeftRightSec.scss";
import LeftScreen from "./left/LeftScreen";
import RightScreen from "./right/RightScreen";

const LeftRightSec = ({t}) => {
  // false : show Left Screen
  // true : show Right Screen
  
  const [side, setSide] = useState(false);

  return (
    <div className="screen_wrap">
      <div className="left_right_wrap" style={{transform:`translateX(${side ? -50 : 0}%)`}}>
        <LeftScreen side={side} setSide={setSide} t={t} />
        <RightScreen side={side} setSide={setSide} t={t} />
      </div>
    </div>
  );
};

export default LeftRightSec;
