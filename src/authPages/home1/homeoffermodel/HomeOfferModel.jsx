import { Fragment, useState } from "react";
import "./HomeOfferModel.scss";
import { IoMdClose } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";

const HomeOfferModel = ({setCouponModel}) => {
  const [copied, setCopied] = useState(false);

  const copyToClip = () => {
    setCopied(true);
    navigator.clipboard.writeText("Coupan Code");
    setTimeout(() => {
      setCopied(false);
    },2000);
  };

  return (
    <div className="model_screen">
      <div className="model_dialog">
        <div className="header">
          <h5>Coupon</h5>
          <button type="button" onClick={() => setCouponModel(false)}>
            <IoMdClose />
          </button>
        </div>
        <div className="model_body">
          <p>Coupan code offered</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="code_wrap">
            {copied ? (
              <p>Coupen Copied To Clipboard...</p>
            ) : (
              <Fragment>
                <p>WSD526</p>
                <button type="button" onClick={copyToClip}>
                  <MdOutlineContentCopy />
                </button>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOfferModel;
