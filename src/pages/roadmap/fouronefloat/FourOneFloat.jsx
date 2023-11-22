import "./FourOneFloat.scss";

const FourOneFloat = ({ scrollY }) => {


let start = 1000;

let moveY = (scrollY > start && scrollY < start + 135) ? scrollY - start : (scrollY >= (start + 135) && scrollY <= (start + 250)) ? 135 : scrollY > (start + 250) ?  (scrollY - start - 110) : -35;
let fromLeft = (scrollY >= (start + 135) && scrollY <= (start + 250)) ? 50*((scrollY - 1135)/(1250 - 1135)) : scrollY >= start + 250 ? 50 : 0;

  return (
    <div className="four_one_float">
      <div className="h_line"></div>
      <div className="bottom_line"></div>

      <div className="floating_line"
      style={{transform:`translateY(${moveY}px)`}}
      >
        <div className="circle"
         style={{
          left: `${fromLeft}%`,
        }}
        >
          <div className="a">
            <div className="b">
              <div className="c"></div>
            </div>
          </div>
        </div>
<div className="inner_float_box">
        <div className="circle"
          style={{
            left: `${fromLeft}%`,
          }}
        >
          <div className="a">
            <div className="b">
              <div className="c"></div>
            </div>
          </div>
        </div>

        <div className="circle"
          style={{
            left: `${100 - fromLeft}%`,
          }}
        >
          <div className="a">
            <div className="b">
              <div className="c"></div>
            </div>
          </div>
        </div>

</div>

        <div className="circle"
         style={{
          left: `${100 - fromLeft}%`,
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

export default FourOneFloat;
