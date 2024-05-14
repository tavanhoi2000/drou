import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SelectDatePicker from "../../../components/DatePicker";
import { getAllCities } from "../../../services";
import "./cart.css";
import { option } from "../../../config/toastOption";
import DialogOrder from "../../../components/DialogOrder";
import { useDispatch } from "react-redux";
import * as actions from "./redux/cartAction"
const Breadcrumb = lazy(() => import("../../../components/Breadcrumb"));


function Cart() {
  const dispatch = useDispatch();
  const [listCities, setListCities] = useState([]);
  const [isDisable, setDisable] = useState(true);
  const [listCartItem, setListCartItem] = useState([]);
  const [show, setShow] = useState(false);
  const [quantityProduct, setQuantityProduct] = useState(1);

  const [orderName, setOrderName] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [orderPhoneNumber, setOrderPhoneNumber] = useState("");
  const [orderAddress, setOrderAddress] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeProductCart = (e, product) => {
    e.preventDefault();
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    setListCartItem(newCartItems);
  };

  const productParams = listCartItem.map((product) => {
    return {
      product_id: product.id,
      quantity: 1,
      total_price: product.price * quantityProduct,
    };
  });

 

  const totalPrice = () => {
    const handleTotal = (acc, cur) => {
      return acc + cur.price;
    };
    const total = listCartItem.reduce(handleTotal, 0);
    return total;
  };

  const createOrderProducts = () => {
    const orderParams = {
      name: orderName,
      email: orderEmail,
      phone: orderPhoneNumber,
      address: orderAddress,
      details: {
        payment_type: 1,
      },
      status: "pending",
      products: productParams,
    };

    console.log(orderParams);

    dispatch(actions.createOrderAction(orderParams)).then((res) => {
      if(res.status === 200) {
        handleClose()
        toast.success('Order successfully', option)
      } else {
        toast.error(`Error : ${res.data.message}`)
      }
    })
  }

  useEffect(() => {
    // const cities = async () => {
    //   const data = await getAllCities();
    //   setListCities(data.data);
    // };
    // cities();
    // getListCartItem();

    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    setListCartItem(cartItems);
    return () => false;
  }, []);
  return (
    <main>
      {listCartItem.length === 0 ? (
        <div
          id="shopify-section-template--14837291843671__main"
          className="shopify-section"
        >
          <div
            className="shopping-cart-area mt-130 mb-130"
            id="section-template--14837291843671__main"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <div className="empty-cart-page text-center">
                    <h4 className="empty_cart_title">
                      Shopping Cart is Empty.
                    </h4>
                    <div className="empty__cart_icon">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <h5 className="mb-30">
                      You have no items in your shopping cart.
                    </h5>
                    <p>
                      <Link
                        to="/shop"
                        className="lezada-button lezada-button--small"
                      >
                        <i className="fa-solid fa-angle-left"></i> Continue
                        Shopping
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Suspense>
            <Breadcrumb />
          </Suspense>
          <div
            id="shopify-section-template--14837291843671__main"
            className="shopify-section"
          >
            <div
              className="shopping-cart-area mt-130 mb-130"
              id="section-template--14837291843671__main"
            >
              <div className="container">
                <div className="row flex-column">
                  <div className="col-lg-12 mb-30">
                    <div className="cart-table-container">
                      <table className="cart-table">
                        <thead>
                          <tr>
                            <th className="pro-title product-name" colSpan="2">
                              Product
                            </th>
                            <th className="pro-price product-price">Price</th>
                            <th className="pro-quantity product-quantity">
                              Quantity
                            </th>
                            <th className="pro-subtotal product-subtotal">
                              Total
                            </th>
                            <th className="pro-remove product-remov text-center">
                              Remove
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {listCartItem.map((item) => {
                            return (
                              <tr key={item.id}>
                                <td className="product-thumbnail pro-thumbnail">
                                  <a href="#">
                                    <img
                                      id="bannerImage-40092814180439"
                                      className="lazyload "
                                      src={item.images}
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td className="product-name pro-name">
                                  <a href="#">{item.name}</a>
                                </td>

                                <td className="product-price pro-price">
                                  <span className="price amount">
                                    <span className="money">${item.price}</span>
                                  </span>
                                </td>

                                <td className="product-quantity pro-quantity">
                                  <div className="pro-qty d-inline-block mx-0 pt-0">
                                    <button className="dec">-</button>
                                    <input
                                      type="text"
                                      defaultValue={1}
                                      totalqty="10"
                                    />
                                    <button
                                      className="inc"
                                      title="10 translation missing: en.products.product.in_stock"
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>

                                <td className="total-price pro-subtotal">
                                  <span className="price">
                                    <span className="money">{item.price}</span>
                                  </span>
                                </td>

                                <td className="product-remove pro-remove">
                                  <a href="#">
                                    <i
                                      className="fa-solid fa-xmark"
                                      onClick={(e) =>
                                        removeProductCart(e, item)
                                      }
                                    ></i>
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-80">
                    <div className="cart-coupon-area pb-30">
                      <div className="row align-items-center">
                        <div className="col-lg-12 text-left text-lg-end border-bottom-0">
                          <input
                            className="lezada-button lezada-button--medium"
                            name="update"
                            type="submit"
                            value="Update Cart"
                          />
                          <Link
                            className="lezada-button lezada-button--medium"
                            to="/shop"
                          >
                            Continue Shopping
                          </Link>
                          <a
                            className="lezada-button lezada-button--medium"
                            href="#"
                          >
                            Clear Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12">
                    <div className="cart-payment">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="pick_delivery_date mb-50">
                            <h3 className="mb-25">
                              Pick a delivery date and Time
                            </h3>
                            <p className="delivery_date ">
                              <div className="date-picker">
                                <SelectDatePicker />
                              </div>
                            </p>
                            <p className="delivery_time">
                              <input
                                id="time"
                                type="text"
                                placeholder="Write delivery time"
                              />
                            </p>
                            <p className="m-0">
                              Pick delivery date and time as you choose.
                              Delivery Time takes place between 12PM - 4PM
                              MON-FRI AND 8AM-11AM SAT.
                            </p>
                          </div>

                          <div className="row">
                            <div className="col-md-12 col-12">
                              <div
                                className="culculate-shipping"
                                id="shipping-calculator"
                              >
                                <h3 className="">Get shipping estimates</h3>
                                <div>
                                  <p className="field">
                                    <select id="address_country">
                                      <option value="---">---</option>
                                      {listCities.map((item) => (
                                        <option
                                          key={item.code}
                                          value={item.name}
                                        >
                                          {item.name}
                                        </option>
                                      ))}
                                    </select>
                                  </p>
                                  <p
                                    className="field"
                                    id="address_province_container"
                                  >
                                    <label
                                      htmlFor="address_province"
                                      id="address_province_label"
                                    >
                                      Province
                                    </label>
                                    <select
                                      id="address_province"
                                      data-default=""
                                    ></select>
                                  </p>
                                  <p className="shipping-info">
                                    <button
                                      type="button"
                                      className="theme-default-button get-rates"
                                    >
                                      Calculate shipping
                                    </button>
                                  </p>
                                </div>
                                <div id="wrapper-response"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="cart-calculation-area">
                            <h2 className="mb-40">Cart Totals</h2>
                            <table className="cart-calculation-table mb-30">
                              <tbody>
                                <tr className="order-total">
                                  <th>Total</th>
                                  <td>
                                    <strong>
                                      <span className="amount">
                                        <span>
                                          <span className="money">
                                            ${totalPrice()}
                                          </span>
                                        </span>
                                      </span>
                                    </strong>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div
                              className={
                                isDisable
                                  ? "cart-calculation-button disabled"
                                  : "cart-calculation-button "
                              }
                            >
                              <input
                                type="checkbox"
                                id="cart_agree_to_check"
                                value={isDisable}
                                onClick={() => setDisable(!isDisable)}
                              />
                              <label htmlFor="cart_agree_to_check">
                                I agree with the terms and conditions
                              </label>
                              <button
                                className="lezada-button lezada-button--medium checkout_btn"
                                onClick={handleShow}
                              >
                                Proceed to Checkoutess
                              </button>
                              <DialogOrder
                                setOrderName={setOrderName}
                                setOrderPhoneNumber={setOrderPhoneNumber}
                                setOrderEmail={setOrderEmail}
                                setOrderAddress={setOrderAddress}
                                handleClose={handleClose}
                                total={totalPrice()}
                                show={show}
                                quantity={listCartItem.length}
                                createOrder={createOrderProducts}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
