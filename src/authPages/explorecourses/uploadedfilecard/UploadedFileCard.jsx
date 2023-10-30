import { icon } from "../../../utils/images/icons";
import "./UploadedFileCard.scss";



const UploadedFileCard = ({img, name, info, upload, cancel, replace, reviewed, submit }) => {
    return(
        <div className="uploaded_file_card">
            <div className="left">
                <div className="img_wraper">
                    <img src={img} alt="poster" />
                </div>
                <div className="text">
                    <p>{name}</p>
                    <p className="small_text m-0">{info}</p>
                </div>
            </div>
            <div className="btn_wrap">
            {upload && <button type="button" className="authbtn auth_primary">Upload</button>}
            {cancel && <button type="button" className="authbtn auth_secondary">Upload</button>}
            {replace && <button type="button" className="authbtn auth_secondary w-b">Replace</button>} 
            {submit && <button type="button" className="authbtn auth_primary">Submit</button>}
            {reviewed && <button type="button" className="iconbtn">
                <img src={icon.reviewed} alt="reviewed" />
                Reviewed</button>}
            </div>

        </div>
        )
};

export default UploadedFileCard;