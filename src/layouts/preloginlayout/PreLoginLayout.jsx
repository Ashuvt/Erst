import { Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";

import { useTranslation } from "react-i18next";
import ParticlesBg from "../../components/particlesbg/ParticlesBg";

const PreLoginLayout = (props) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch({ type: resetAllToggler() });
  };
  return (
    <Fragment>
      <div className="prelogin_layout" onClick={resetAll}>
        <Header t={t} />

        {props.children}

        <ParticlesBg />
        <Footer t={t} />
      </div>
    </Fragment>
  );
};

export default PreLoginLayout;
