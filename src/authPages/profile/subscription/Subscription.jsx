import { images } from "../../../utils/images/images";
import "./Subscription.scss";
import PaymentMethodCard from "./paymentmethodcard/PaymentMethodCard";
import SubscribedCard from "./subscribedcard/SubscribedCard";
import { Fragment } from "react";

const Subscription = () => {
  const subscribedData = [
    {
      id: 0,
      img: images.subscribedA,
      title: "Course Name",
      price: 13,
      started: "3 months ago",
    },
    {
      id: 1,
      img: images.subscribedB,
      title: "Course Name",
      price: 13,
      started: "3 months ago",
    },
  ];
  return (
    <div className="profile_subscription">
      <div className="title">
        <h5 className="small_title">Subscription </h5>
        <p>Manage your subscription and payment method</p>
      </div>

      <div className="offer_card">
        <div className="text">
          <p className="t-g-16">Get 25% off on RedTeam</p>
          <p>
            Get access to 50+ modules covering topics from basic to advance.
          </p>
          <button type="button">Subscribe</button>
        </div>
        <img src={images.offerBell} alt="offer" />
      </div>

      {subscribedData &&
        subscribedData.map((data) => {
          return (
            <Fragment key={data.id}>
              <SubscribedCard {...data} />
            </Fragment>
          );
        })}

      <div className="title mt">
        <p className="t-g-16">Payment method</p>
        <p>Add a payment method to easily subscribe to courses.</p>
      </div>

      <PaymentMethodCard title="MasterCard ending with 1630" text="Expiring 02/2025" />

      <button className="grotesk_secondary add">Add</button>
    </div>
  );
};

export default Subscription;
