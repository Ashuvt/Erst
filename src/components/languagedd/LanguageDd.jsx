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
      text: "En",
    },
    // {
    //   id: "Hebrew",
    //   lang: "he",
    //   text: "עִברִית",
    // },
    {
      id: "Arabic",
      lang: "ar",
      text: "عر",
    },
  ];

const defaultSelection = localStorage.getItem("lang");
  const [lang, setLang] = useState("En");

  useEffect(() => {
    const language = localStorage.getItem("lang");
    if(language){
     const currentLang = AllLanguages.filter(ele => ele.lang === language);
      setLang(currentLang[0].text);
    }else{
      setLang("en");
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
