import AuthLayout from "../AuthLayout";
import "./ViewCart.scss";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useContext, useEffect } from "react";
import { redirectContext } from "../../context/RoutingContext";
import { baseUrl } from "../../utils/apidata";

const ViewCart = () => {
  const country = localStorage.getItem("country");

  const { getCartApi, removeFromCartApi } = useContext(redirectContext);

  const { loading, cartData, error } = useSelector(
    (state) => state.getCartReducer
  );

  useEffect(() => {
    getCartApi();
  }, []);

  //   setCheckOut(true);
  //   const token = localStorage.getItem("token");
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //   };

  //   try {
  //     const response = await axios.post(
  //       `${baseUrl}/${checkout}`,
  //       {},
  //       { headers }
  //     );
  //     console.log("CHECKOUT", response);
  //     if (response.data?.success) {
  //       setCheckOut(false);
  //       window.open(response?.data?.data?.url, "_blank", "noreferrer");
  //     }
  //   } catch (error) {
  //     setCheckOut(false);
  //     console.log(error);
  //   }
  // };

  return (
    <AuthLayout>
      <section className="view_cart">
        <div className="auth_container">
          <div className="cart_grid">
            <div className="left">
              <div className="title">
                <h5>My Cart ({cartData?.cart?.length || 0})</h5>
                <button>Continue shopping</button>
              </div>

              <div className="product_list">
                {cartData?.cart?.length > 0 ? (
                  cartData?.cart?.map((data) => {
                    return (
                      <div className="product_card" key={data._id}>
                        <div className="info">
                          <div className="img_wrap">
                            <img
                              src={`${baseUrl}/${data?.course_id?.image}`}
                              alt="course"
                            />
                          </div>
                          <div className="text">
                            <div className="left">
                              <p className="name">{data?.course_id?.name}</p>

                              {country === "India" ? (
                                <p className="price">
                                  {data?.course_id?.price_inr} INR
                                </p>
                              ) : (
                                <p className="price">
                                  {data?.course_id?.price_usd} USD
                                </p>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCartApi(data?._id)}
                            >
                              remove
                            </button>
                          </div>  
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <Fragment>
                    {!loading && (
                      <div className="empty_block">
                        <p>Data Does Not Exist..</p>
                      </div>
                    )}
                  </Fragment>
                )}

                {loading && (
                  <div className="empty_block">
                    <p>Loading...</p>
                  </div>
                )}
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default ViewCart;
