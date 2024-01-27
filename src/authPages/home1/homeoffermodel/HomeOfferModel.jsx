import { Fragment, useState } from "react";
import "./HomeOfferModel.scss";
import { IoMdClose } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";

const HomeOfferModel = ({
  setCouponModel,
  code,
  title,
  description,
  offer,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClip = () => {
    setCopied(true);
    navigator.clipboard.writeText(`${code}`);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
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
          <p>{title}</p>

          {description && (
            <div
              className="desc"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          )}

          {offer && <p>Offer : {offer}%</p>}

          <div className="code_wrap">
            <p>Code : {code}</p>

            <Fragment>
              <button type="button" onClick={copyToClip}>
                {
                  copied ? "Copied..." : <MdOutlineContentCopy />
                }
                
              </button>
            </Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOfferModel;
