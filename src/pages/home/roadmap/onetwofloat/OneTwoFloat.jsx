import { Fragment } from "react";
import "./OneTwoFloat.scss";
import OneThreeFloat from "../onethreefloat/OneThreeFloat";

const OneTwoFloat = ({ scrollY }) => {
  let startPoint = 1700;

  let fromLeft = scrollY >= 1830 && scrollY <= 1900 ? 
  50 + (0 - 50)*((scrollY - 1830)/(1900 - 1830)) 
   : scrollY > 1900 ? 0 : 50;

  let moveY = scrollY > startPoint && scrollY < startPoint + 130
      ? scrollY - startPoint
      : scrollY >= startPoint + 130 && scrollY <= startPoint + 200
      ? 130
      : scrollY - startPoint - 70;

  return (
    <Fragment>
    <div className="one_two_float">
      <div className="t_line"></div>
      <div className="h_line">
        <div className="left"></div>
        <div className="right"></div>
      </div>

      <div
        className="moving_line"
        style={{ transform: `translateY(${moveY}px)` }}
      >
        <div className="circle" style={{ left: `${fromLeft}%` }}>
          <div className="a">
            <div className="b">
              <div className="c"></div>
            </div>
          </div>
        </div>

        <div className="circle" style={{ left: `${100 - fromLeft}%` }}>
          <div className="a">
            <div className="b">
              <div className="c"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="small_spport">
        <OneThreeFloat scrollY={scrollY} />
    </div>
    </Fragment>
  );
};

export default OneTwoFloat;
