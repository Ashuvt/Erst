import { Fragment, useEffect } from "react";
import "./SoftwareDeveloper.scss";
import MapLanding from "../../components/maplanding/MapLanding";
import SymmentricSlider from "../../components/symmentricslider/SymmentricSlider";
import DevelopersDetail from "./developersdetail/DevelopersDetail";
import ApplyForm from "./applyform/ApplyForm";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import WOW from "wow.js";

const SoftwareDeveloper = () => {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);

    return(
        <Fragment>
            <Header />
            <MapLanding 
                title="Software Developer"
                text="The Smart Sales Assistant can also provide insights into customer behavior and preferences, allowing you to optimize your marketing and sales strategies."
            />
           <SymmentricSlider />
            <section className="software_developer_detail p_top p_bottom" >
                <div className="content_wrap">
                    <DevelopersDetail />
                    <ApplyForm />
                </div>
            </section>
            <Footer />
        </Fragment>
    )
};

export default SoftwareDeveloper;