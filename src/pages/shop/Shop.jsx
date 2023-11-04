import { Fragment, useEffect } from "react";
import "./Shop.scss"
import ShopLanding from "./shoplanding/ShopLanding";
import AllProducts from "./allproducts/AllProducts";
import Offer from "../home2/offer/Offer";
import ClientSay from "./clientsay/ClientSay";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import WOW from "wow.js";

const Shop = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="shop_glass a"></div>
      <div className="shop_glass b"></div>
      <div className="shop_glass c"></div>
      <ShopLanding />
      <AllProducts />
      <Offer
        title="Subscribe To Us And Get A 10% Discount"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum! Blanditiis, animi maiores! Aperiam veritatis facere animi? Distinctio architecto dignissimos eveniet, quibusdam id fugit suscipit? At reprehenderit pariatur saepe cupiditate."
      />
      <ClientSay />
      <Footer />
    </Fragment>
  );
};

export default Shop;
