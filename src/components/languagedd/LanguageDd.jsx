import "./LanguageDd.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { multilangToggler } from "../../store/actions";
import { useTranslation } from 'react-i18next';

const LanguageDd = () => {

    const [lang, setLang] = useState("English");


    const dispatch = useDispatch();
    const status = useSelector(state => state.toggleReducer.multilangDdStatus);

    const btnClickHandler = (e) => {
        e.stopPropagation();
        dispatch({type:multilangToggler(), payload:!status});
    }

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng, selected) => {
        i18n.changeLanguage(lng);
        setLang(selected)
      };



    return(
        <div className="language_dd">
            <button type="button" className="primarybtn" onClick={btnClickHandler}>{lang}</button>
            <div className={`option_list ${status ? 'oprn' : 'close'}`}>
                <button type="button" onClick={() => changeLanguage('en', "English")}>English</button>
                <button type="button" onClick={() => changeLanguage('he', "Hebrew")}>Hebrew </button>
                <button type="button" onClick={() => changeLanguage('ar', "Arabic")}>Arabic</button>
            </div>
        </div>
    )
};

export default LanguageDd;