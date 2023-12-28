import "./OneThreeFloat.scss";

const OneThreeFloat = ({ scrollY }) => {
  let startPoint = 1700;

  let fromLeft =
    scrollY >= 1830 && scrollY <= 1900
      ? 50 + (0 - 50) * ((scrollY - 1830) / (1900 - 1830))
      : scrollY > 1900
      ? 0
      : 50;

  let moveY =
    scrollY > startPoint && scrollY < startPoint + 130
      ? scrollY - startPoint
      : scrollY >= startPoint + 130 && scrollY <= startPoint + 200
      ? 130
      : scrollY - startPoint - 70;

  return (
    <div className="one_three_float">
      <div className="t_line"></div>
      <div className="h_line">
        <div className="left"></div>
        <div className="right"></div>
        <div className="center"></div>
      </div>

      <div
        className="moving_line"
        style={{ transform: `translateY(${moveY}px)` }}
      >
        <div className="circle l" style={{ left: `${fromLeft}%` }}>
          <div className="a">
            <div className="b">
              <div className="c"></div>
            </div>
          </div>
        </div>

        <div className="circle" style={{ left: "50%" }}>
          <div className="a">
            <div className="b">
              <div className="c"></div>
            </div>
          </div>
        </div>

        <div className="circle r" style={{ left: `${100 - fromLeft}%` }}>
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

export default OneThreeFloat;
