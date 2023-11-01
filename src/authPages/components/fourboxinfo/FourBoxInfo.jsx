import "./FourBoxInfo.scss";

const FourBoxInfo = ({ title, data = [] }) => {
  return (
    <div className="four_box_info">
      <h5 className="small_title wow fadeInUp">{title}</h5>
      <div className="four_info_grid">
        {data.length > 0 &&
          data.map((item, k) => {
            return (
              <div
                className="four_info_card wow fadeInUp"
                key={item.id}
                data-wow-delay={`${k * 0.1}s`}
              >
                <div className="bg_card_overlay"></div>
                <div className="icon_box">
                  <img src={item.icon} alt="icon" />
                </div>
                <p className="title">{item.title}</p>
                <p>{item.text}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FourBoxInfo;
