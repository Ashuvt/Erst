import "./OneFourFloat.scss";

const OneFourBox = ({ scrollY }) => {
  let start = 300;

  

  let moveY =
    scrollY > start && scrollY <= start + 180
      ? scrollY - start
      : scrollY > start + 180 && scrollY <= start + 300
      ? 180
      : scrollY > start + 300
      ? scrollY - (start + 100)
      : -15;

      let leftXA = scrollY > start + 180 && scrollY <= start + 300
        ? 50 + (0 - 50)*((scrollY - 480)/120)
        : scrollY >= (start + 300)
        ? 0
        : 50;



  return (
    <div className="one_four_float">
      <div className="top_line"></div>
      <div className="h_line"></div>

      <div
        className="floating_line"
        style={{ transform: `translateY(${moveY}px)`, display:`${scrollY > 800 ? 'none' : 'block'}` }}
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
              left: `${leftXA}%`,
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
