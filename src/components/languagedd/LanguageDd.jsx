import "./LanguageDd.scss";
import { useState, Fragment, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageChanges, multilangToggler } from "../../store/actions";
import { useTranslation } from "react-i18next";
import { redirectContext } from "../../context/RoutingContext";

const LanguageDd = () => {

  const {domainName} = useContext(redirectContext);
  const { t, i18n } = useTranslation();

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
  ] : 
  [
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


  const [lang, setLang] = useState(domainName() === 'net' ? 'he' : 'en');

  useEffect(() => {
    const language = localStorage.getItem("lang");
    if(language){
     const currentLang = AllLanguages.filter(ele => ele.lang === language);
      setLang(currentLang[0].lang);
      i18n.changeLanguage(currentLang[0].lang);
          dispatch({type:languageChanges(), payload:currentLang[0].lang});
    }else{
      // default language is set by this set storage
      localStorage.setItem("lang", domainName() === 'net' ? 'he' : 'en')

      setLang(domainName() === 'net' ? 'he' : 'en');
      i18n.changeLanguage(domainName() === 'net' ? 'he' : 'en');
          dispatch({type:languageChanges(), payload:domainName() === 'net' ? 'he' : 'en'});
    }
  })

  const dispatch = useDispatch();
  const status = useSelector((state) => state.toggleReducer.multilangDdStatus);

  const btnClickHandler = (e) => {
    e.stopPropagation();
    dispatch({ type: multilangToggler(), payload: !status });
  };



  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);     
    dispatch({type:languageChanges(), payload:lng});
    setLang(lng);  
    localStorage.setItem("lang",lng);
  }; 




  return (
    <div className="language_dd">
      <button type="button" className="primarybtn" onClick={btnClickHandler}>
        {AllLanguages.filter(ele => ele.lang === lang)[0]?.text}
      </button>
      <div className={`option_list ${status ? "open" : "close"}`}>    
        {AllLanguages.map((data) => {
          return (
            <Fragment key={data.id}>
              <button
                type="button"
                className={lang === data.lang ? 'active' : ''}
                onClick={() => changeLanguage(data.lang)}
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


