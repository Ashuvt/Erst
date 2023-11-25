import "./LanguageDd.scss";
import { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageChanges, multilangToggler } from "../../store/actions";
import { useTranslation } from "react-i18next";

const LanguageDd = () => {



  const AllLanguages = [
    {
      id: "English",
      lang: "en",
      text: "English",
    },
    {
      id: "Hebrew",
      lang: "he",
      text: "עִברִית",
    },
    {
      id: "Arabic",
      lang: "ar",
      text: "عربي",
    },
  ];

  const [lang, setLang] = useState("English");

  const dispatch = useDispatch();
  const status = useSelector((state) => state.toggleReducer.multilangDdStatus);

  const btnClickHandler = (e) => {
    e.stopPropagation();
    dispatch({ type: multilangToggler(), payload: !status });

  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng, selected) => {
    i18n.changeLanguage(lng);
    setLang(selected);
    
    dispatch({type:languageChanges(), payload:lng});


  };

  return (
    <div className="language_dd">
      <button type="button" className="primarybtn" onClick={btnClickHandler}>
        {lang}
      </button>
      <div className={`option_list ${status ? "oprn" : "close"}`}>    
        {AllLanguages.map((data) => {
          return (
            <Fragment key={data.id}>
              <button
                type="button"
                className={lang === "data.text" ? 'active' : ''}
                onClick={() => changeLanguage(data.lang, data.text)}
              >
                {data.text}
              </button>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageDd;
