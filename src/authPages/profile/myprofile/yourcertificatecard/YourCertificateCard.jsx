import "./YourCertificateCard.scss";


const YourCertificateCard = ({img, title, text}) => {
  return <div className="your_certificate">
    <div className="info">
      <div className="img_wrap">
        <img src={img} alt="img" />        
      </div>
      <div className="text">
          <p>{title}</p>
          <p className="small_text">{text}</p>
        </div>
    </div>    
    <div className="btns">
        <button className="textbtn">Preview</button>
        <button type="button" className="grotesk_primary authbtn">Download</button>
    </div>
  </div>;
};

export default YourCertificateCard;
