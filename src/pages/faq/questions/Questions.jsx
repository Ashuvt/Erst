import { Fragment} from "react";
import "./Questions.scss";
import QuestionCard from "./questioncard/QuestionCard";
import { faqData } from "../../../utils/data/data";
import Map from "../../../components/map/Map";
import MidTitle from "../../../components/midtitle/MidTitle";


const Questions = () => {
  return (
    <section className="que_ans p_top p_bottom">
      <div className="content_wrap">
        <div className="content">
          <MidTitle
            title="We're The Best And We Can Explain Why"
            text="The Smart Sales Assistant can also provide insights into customer
            behavior and preferences, allowing you to optimize your marketing
            and sales strategies."
          />
        </div>
        <div className="accodian_grid wow slideInUp">
          <div className="left">
            {faqData &&
              faqData.slice(0, faqData.length / 2).map(({ que, ans, id }) => {
                return (
                  <Fragment key={id}>
                    <QuestionCard que={que} ans={ans} />
                  </Fragment>
                );
              })}
          </div>
          <div className="right">
            {faqData &&
              faqData.slice(faqData.length / 2).map(({ que, ans, id }) => {
                return (
                  <Fragment key={id}>
                    <QuestionCard que={que} ans={ans} />
                  </Fragment>
                );
              })}
          </div>
        </div>
        <Map />
      </div>
    </section>
  );
};

export default Questions;
