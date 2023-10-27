import "./FourBoxInfo.scss";

const FourBoxInfo = ({ title, data = [] }) => {
  return (
    <div className="four_box_info">
      <h5 className="small_title">{title}</h5>
      <div className="four_info_grid">
        {data.length > 0 &&
          data.map((item) => {
            return (
              <div className="four_info_card" key={item.id}>
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
