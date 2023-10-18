import { useEffect, useState } from "react";
import "./Help.scss";
import Map from "../../../components/map/Map";
import MidTitle from "../../../components/midtitle/MidTitle";
import WOW from "wow.js";
import { helpForm } from "../../../utils/data/forms";

const Help = () => {

  const [selectedProblem, setSelectedProblem] = useState('');
  const [ddStatus, setDdStatus] = useState(false);
  const [help, setHelp] = useState(helpForm);

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const formHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setHelp(values => ({...values, [name]: value}))
  };   

  const formSubmitHandler = () => {
    console.log(help);
  };

  const ddToggler = () => {
    setDdStatus(!ddStatus);
  };

  const proglemList = [
    {
      id:"111",
      option:"Option A"
    },
    {
      id:"222",
      option:"Option B"
    },
    {
      id:"333",
      option:"Option C"
    },
    {
      id:"444",
      option:"Option D"
    },
    {
      id:"555",
      option:"Option E"
    },
  ];

  const selectOption = (data) => {    
    setSelectedProblem(data.option);
  }

  return (
    <section className="contact_help p_top p_bottom">
      <div className="content_wrap">
        <Map />
        <div className="filler"></div>
        <MidTitle
          title="Still Need Help?"
          text="The Smart Sales Assistant can also provide insights into customer
          behavior and preferences, allowing you to optimize your marketing
          and sales strategies."
        />
        <div className="help_form">
          <form>
            <div className="info_fields wow slideInUp">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                value={help.name}
                onChange={formHandler}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={help.email}
                onChange={formHandler}
              />
              <input
                type="number"
                placeholder="Number"
                name="number"
                value={help.number}
                onChange={formHandler}
              />
            
              <div className="custom_dropdown" onClick={ddToggler}>
               <p>{selectedProblem ? selectedProblem : 'select Problem'}</p>
                <div className={`option_list ${ddStatus ? 'open' : 'close'}`}>
              {
                proglemList.map((data) => {
                  return(
                    <button type="button" className="optionbtn" key={data.id} onClick={() => selectOption(data)} >{data.option}</button>
                  )
                })
              }
                </div>
              </div>
            </div>
            <textarea
              placeholder="Message"
              className="wow slideInUp"
              name="message"              
              value={help.message}
              onChange={formHandler}
            ></textarea>

            <button type="button" className="primarybtn wow slideInUp" onClick={formSubmitHandler}>
              send message
            </button>
          </form>
        </div>
      </div>

      <div className="pink_blur left"></div>
      <div className="pink_blur right"></div>
    </section>
  );
};

export default Help;
