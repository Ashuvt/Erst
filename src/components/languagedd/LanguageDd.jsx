import "./LanguageDd.scss";
import { useState, Fragment, useEffect, useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageChanges, multilangToggler } from "../../store/actions";
import { useTranslation } from "react-i18next";
import { redirectContext } from "../../context/RoutingContext";

const LanguageDd = () => {

  const {domainName} = useContext(redirectContext);

  const AllLanguages = domainName === "net" ? [
    {
      id: "English",
      lang: "en",
      text: "En",
    },
    {
      id: "Hebrew",
      lang: "he",
      text: "עב",
      
    },
    {
      id: "Arabic",
      lang: "ar",
      text: "عر",
    },
  ] : [
    {
      id: "English",
      lang: "en",
      text: "En",
    },
    {
      id: "Arabic",
      lang: "ar",
      text: "عر",
    },
  ];

// Default language set from app.js file

const defaultSelection = localStorage.getItem("lang");
  const [lang, setLang] = useState("he");

  useEffect(() => {
    const language = localStorage.getItem("lang");
    if(language){
     const currentLang = AllLanguages.filter(ele => ele.lang === language);
      setLang(currentLang[0].lang);
    }else{      
      setLang("he");
    }
  })

  const dispatch = useDispatch();
  const status = useSelector((state) => state.toggleReducer.multilangDdStatus);

  const btnClickHandler = (e) => {
    e.stopPropagation();
    dispatch({ type: multilangToggler(), payload: !status });
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng, selected) => {
    i18n.changeLanguage(lng);     
    dispatch({type:languageChanges(), payload:lng});
    setLang(selected);  
    localStorage.setItem("lang",lng);
  }; 




  return (
    <div className="language_dd">
      <button type="button" className="primarybtn" onClick={btnClickHandler}>
        {AllLanguages.filter(ele => ele.lang === lang)[0]?.text}
      </button>
      <div className={`option_list ${status ? "oprn" : "close"}`}>    
        {AllLanguages.map((data) => {
          return (
            <Fragment key={data.id}>
              <button
                type="button"
                className={lang === data.lang ? 'active' : ''}
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
