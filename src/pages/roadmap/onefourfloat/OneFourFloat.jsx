import "./OneFourFloat.scss";

const OneFourBox = ({ scrollY }) => {
  let moveY =
    scrollY < 130
      ? scrollY
      : scrollY >= 130 && scrollY < 250
      ? 130
      : scrollY - 120;



      
  let leftXA =
    scrollY >= 130 && scrollY < 250
      ? (250 - scrollY) / (scrollY - 125)
      : scrollY > 250
      ? 0
      : 50;
      let leftXB =
      scrollY >= 130 && scrollY < 250
        ? (250 - scrollY) / (scrollY - 125)
        : scrollY > 250
        ? 0
        : 50;

  return (
    <div className="one_four_float">
      <div className="top_line"></div>
      <div className="h_line"></div>

      <div
        className="floating_line"
        style={{ transform: `translateY(${moveY}px)` }}
      >
        <div
          className="circle left_a"
          style={{
            left: `${leftXA}%`,
          }}
        >
          <div className="a">
            <div className="b">
              <div className="c"></div>
            </div>
          </div>
        </div>
        <div className="inner_line">

        <div
          className="circle left_b"
          style={{
            left: `${leftXB}%`,
          }}
        >
          <div className="a">
            <div className="b">
              <div className="c"></div>
            </div>
          </div>
        </div>

        <div
          className="circle right_b"
          style={{
            left: `${100 - leftXB}%`,
          }}
        >
          <div className="a">
            <div className="b">
              <div className="c"></div>
            </div>
          </div>
        </div>
        </div>
        <div
          className="circle right_a"
          style={{
            left: `${100 - leftXA}%`,
          }}
        >
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

export default OneFourBox;
