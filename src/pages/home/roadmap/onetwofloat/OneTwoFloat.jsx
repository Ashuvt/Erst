import "./OneTwoFloat.scss";

const OneTwoFloat = ({ scrollY }) => {
  let startPoint = 1500;

  let fromLeft = scrollY >= 1630 && scrollY <= 1700 ? 
  50 + (0 - 50)*((scrollY - 1630)/(1700 - 1630)) 
   : scrollY > 1700 ? 0 : 50;

  let moveY = scrollY > startPoint && scrollY < startPoint + 130
      ? scrollY - startPoint
      : scrollY >= startPoint + 130 && scrollY <= startPoint + 200
      ? 130
      : scrollY - startPoint - 70;

  return (
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
  );
};

export default OneTwoFloat;
