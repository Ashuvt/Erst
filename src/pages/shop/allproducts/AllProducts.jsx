import { useState } from "react";
import "./AllProducts.scss";
import { Fragment } from "react";
import ProductCard from "./productcard/ProductCard";
import { products } from "../../../utils/images/images";

const AllProducts = () => {
  const [category, setCategory] = useState("");

  const productsData = [
    {
      id: 0,
      category: "gaming",
      img: [products.productAa, products.productAb, products.productAc],
      tag: "new",
      price: 950,
      mp: 950,
      title: "Value Steam Deck",
      off: 0,
    },
    {
      id: 1,
      category: "virtual",
      img: [products.productEa, products.productEb, products.productEc],
      tag: "",
      price: 790,
      mp: 1200,
      title: "PlayStation VR",
      off: 35,
    },
    {
      id: 2,
      category: "headset",
      img: [products.productCa, products.productCb, products.productCc],
      tag: "popular",
      price: 745,
      mp: 745,
      title: "Apple AirPods",
      off: 35,
    },
    {
      id: 3,
      category: "virtual",
      img: [products.productFa, products.productFb, products.productFc],
      tag: "",
      price: 659,
      mp: 999,
      title: "Gaming Headset",
      off: 25,
    },
    {
      id: 4,
      category: "gaming",
      img: [products.productBa, products.productBb, products.productBc],
      tag: "new",
      price: 550,
      mp: 550,
      title: "Sony Play Station",
      off: 0,
    },
    {
      id: 5,
      category: "headset",
      img: [products.productDa, products.productDb, products.productDc],
      tag: "popular",
      price: 1700,
      mp: 1700,
      title: "Headphones Sony WH",
      off: 0,
    },
  ];

  return (
    <section className="all_products p_top p_bottom">
      <div className="content_wrap">
        <div className="product_top_border"></div>
        <div className="top_btns">
          <button
            type="button"
            className={category === "" ? "active" : ""}
            onClick={() => setCategory("")}
          >
            all products
          </button>
          <div className="catrgories">
            <button
              type="button"
              className={category === "gaming" ? "active" : ""}
              onClick={() => setCategory("gaming")}
            >
              gaming
            </button>
            <button
              type="button"
              className={category === "virtual" ? "active" : ""}
              onClick={() => setCategory("virtual")}
            >
              virtual
            </button>
            <button
              type="button"
              className={category === "headset" ? "active" : ""}
              onClick={() => setCategory("headset")}
            >
              headset
            </button>
          </div>
        </div>
        <div className="product_list">
          {productsData &&
            productsData.map((data) => {
              if(data.category.startsWith(category)){
                return (
                  <Fragment key={data.id}>
                    <ProductCard {...data} />
                  </Fragment>
                );
              }
            
            })}
        </div>
      </div>
      <div className="primary_blur a"></div>
      <div className="primary_blur b"></div>
      <div className="primary_blur c"></div>
    </section>
  );
};

export default AllProducts;
