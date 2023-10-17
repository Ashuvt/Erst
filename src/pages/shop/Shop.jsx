import { Fragment } from "react";
import ShopLanding from "./shoplanding/ShopLanding";
import AllProducts from "./allproducts/AllProducts";
import Offer from "../home2/offer/Offer";
import ClientSay from "./clientsay/ClientSay";

const Shop = () => {
    return(
        <Fragment>
            <ShopLanding />
            <AllProducts />
            <Offer
            title="Subscribe To Us And Get A 10% Discount"
            text="The SaaS model is the absence of costs for the purchase and maintenance of computer equipment on which you need to install “stationary” software. The stability of the system is maintained by the developer."
            />
            <ClientSay />
        </Fragment>
    )
};

export default Shop;