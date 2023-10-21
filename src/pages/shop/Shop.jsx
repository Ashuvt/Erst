import { Fragment } from "react";
import "./Shop.scss"
import ShopLanding from "./shoplanding/ShopLanding";
import AllProducts from "./allproducts/AllProducts";
import Offer from "../home2/offer/Offer";
import ClientSay from "./clientsay/ClientSay";

const Shop = () => {
  return (
    <Fragment>
      <div className="shop_glass a"></div>
      <div className="shop_glass b"></div>
      <div className="shop_glass c"></div>
      <ShopLanding />
      <AllProducts />
      <Offer
        title="Subscribe To Us And Get A 10% Discount"
        text="The SaaS model is the absence of costs for the purchase and maintenance of computer equipment on which you need to install “stationary” software. The stability of the system is maintained by the developer."
      />
      <ClientSay />
    </Fragment>
  );
};

export default Shop;
