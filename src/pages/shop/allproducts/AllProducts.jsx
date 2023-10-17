import "./AllProducts.scss";

const AllProducts = () => {
  return (
    <section className="all_products">
      <div className="content_wrap">
        <div className="top_btns">
          <button type="button">all products</button>
          <div className="catrgories">
            <button type="button">gaming</button>
            <button type="button">virtual</button>
            <button type="button">headset</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
