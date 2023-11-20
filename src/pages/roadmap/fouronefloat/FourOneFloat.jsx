import "./FourOneFloat.scss";

const FourOneFloat = ({ scrollY }) => {





 let moveY = (scrollY > 700 && scrollY < 830) ? (scrollY - 700) : (scrollY >= 830 && scrollY < 900) ? 130 : (scrollY - 770);

 let fromLeft = (scrollY >= 830 && scrollY < 900) ? 50 - 50*((900 - scrollY)/70)  : scrollY >= 900 ? 50 : 0;

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
