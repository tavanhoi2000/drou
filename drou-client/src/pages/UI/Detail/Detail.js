import "./detail.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useRef, useState } from "react";
import * as actions from "./redux/detailAction";
import Item from "../../../components/Item";
import { option } from "../../../config/toastOption";
import { toast } from "react-toastify";
import Breadcrumb from "../../../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import DialogOrder from "../../../components/DialogOrder";
function Detail() {
  let [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { listProduct, productDetail } = useSelector((state) => ({
    listProduct: state.detail.products,
    productDetail: state.detail.productDetail
  }));
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getListProduct = () => {
    dispatch(actions.fetchProductsAction());
  };

  const getProduct = () => {
    dispatch(actions.fetchProductAction(productId))
  }
  useEffect(() => {
    getListProduct();
    getProduct()
  }, []);
  const refQuantity = useRef();
  const navigate = useNavigate();

  const addToCart = (e, product) => {
    e.preventDefault();
    let storage = JSON.parse(localStorage.getItem("cartItems")) || [];
    storage.push(product);
    localStorage.setItem("cartItems", JSON.stringify(storage));
    toast.success("Cart added successfully", option);
  };
  if (!productDetail) {
    return <p>loading...</p>;
  }
  return (
    <main>
      <Breadcrumb />
      <div
        id="shopify-section-template--14837292236887__product-template"
        className="shopify-section"
      >
        <div
          className="product-details  main-product-thumbnail white-bg mt-50 "
          id="product-details-with-gallery"
          data-section="productPage_section"
        >
          <div className="custom-container">
            <div className="row">
              <div className=" col-lg-12 col-md-12 col-12">
                <div className="row ">
                  <div className="col-md-12 col-lg-6 col-12 ">
                    <div className="stky__shop-details-img-gallery">
                      <div className="featured-image tab-content featured-image">
                        <div className="" id="ProductPhoto">
                          <img
                            id="ProductPhotoImg"
                            className="product-zoom product_variant_image"
                            alt={productDetail.name}
                            src={productDetail.images}
                          />
                        </div>

                        {/* <div
                          id="ProductThumbs"
                          className="product-thumbnail active_thumb_carousel owl-carousel"
                        >
                          <div className="d-flex sub-product">
                            {listProduct.map((item, index) =>(
                              <a
                                className="product-single__thumbnail"
                                href="#"
                                key={index}
                              >
                                <img
                                  src={item.images}
                                  onClick={(e) => {
                                    productDetail.images = item;
                                  }}
                                />
                              </a>
                            ))}
                          </div> 
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 col-12">
                    <div id="product-content">
                        <div className="product-details xxx">
                          <h3 id="popup_cart_title">{productDetail.name}</h3>

                          <div className="product-variant-inventory">
                            <span className="inventory-title">
                              Availability:
                            </span>{" "}
                            <span className="variant-inventory">
                              {productDetail.quantity} left in stock
                            </span>
                          </div>

                          <div className="stock_countdown_progress">
                            <span className="stock_progress_bar"></span>
                          </div>
                          
                          <div className="pro-thumb-price mt-10">
                            <p className="d-flex align-items-center">
                              <span id="ProductPrice" className="price">
                                <span className="money">
                                  ${productDetail.price}
                                </span>
                              </span>
                            </p>
                          </div>

                          <div className="product-description mt-3 mb-3">
                            <p>
                              <span className="">
                                {productDetail.description}
                              </span>
                            </p>
                          </div>
                          <div className="product_additional_information mb-30 mt-10">
                            <button
                              type="button"
                              data-toggle="modal"
                              data-target="#size_guide"
                            >
                              <i className="fa-solid fa-pencil"></i> Size Guide
                            </button>
                            <button
                              type="button"
                              data-toggle="modal"
                              data-target="#shipping_policy"
                            >
                              <i className="fa-solid fa-truck"></i> Shipping
                            </button>
                            <button
                              type="button"
                              data-toggle="modal"
                              data-target="#ask_about_product"
                            >
                              <i className="fa-solid fa-envelope"></i>
                              Ask About This product
                            </button>
                          </div>
                          <div className="product-actions quantity-cart-box d-flex align-items-center product-details-des">
                            <div className="shop-product__block shop-product__block--quantity mb-40">
                              <div className="shop-product__block__value">
                                <div className="pro-qty d-inline-block mx-0 pt-0">
                                  <span
                                    className="dec"
                                    onClick={() => setQuantity(quantity--)}
                                  >
                                    -
                                  </span>
                                  <input
                                    type="text"
                                    name="quantity"
                                    totalqty="11"
                                    onChange={(e) =>
                                      setQuantity(e.target.value)
                                    }
                                    value={quantity}
                                    ref={refQuantity}
                                  />
                                  <span
                                    className="inc"
                                    onClick={() => setQuantity(quantity++)}
                                  >
                                    +
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="product-cart-action">
                              <button
                                className="pro-cart"
                                id="AddToCart"
                                onClick={(e) => addToCart(e, productDetail)}
                              >
                                <span>
                                  <span
                                    className="cart-title"
                                    id="AddToCartText"
                                  >
                                    Add to cart
                                  </span>
                                </span>
                              </button>
                            </div>
                            <div className="wishlist-action">
                              <a
                                className="action-wishlist wishlist-btn wishlist"
                                href="#"
                              >
                                <span className="add-wishlist">
                                  <i className="far fa-heart"></i>
                                </span>
                                <span className="loading-wishlist">
                                  <i className="fa fa-spinner animated rotateIn infinite"></i>{" "}
                                </span>
                                <span className="remove-wishlist">
                                  <i className="fas fa-heart"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="dynmiac_checkout--button">
                            <div className="checkout_button">
                              <div className="shopify-payment-button">
                                <button onClick={handleShow} className="shopify-payment-button__button shopify-payment-button__button--unbranded shopify-payment-button__button--hidden">
                                  Buy it now
                                </button>

                                <DialogOrder handleClose={handleClose} show={show} total={productDetail.price}/>
                              </div>
                            </div>
                          </div>


                          <div className="custom-payment-options">
                            <div>
                              <p>Guaranteed safe checkout</p>
                            </div>
                            <div className="methods-of-payment">
                              <img
                                src="//drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/amazon-92e856f82cae5a564cd0f70457f11af4d58fa037cf6e5ab7adf76f6fd3b9cafe.svg"
                                height="35"
                                alt="amazon payments"
                              />
                              <img
                                src="//drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg"
                                height="35"
                                alt="american express"
                              />
                              <img
                                src="//drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg"
                                height="35"
                                alt="apple pay"
                              />
                              <img
                                src="//drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/bitcoin-e41278677541fc32b8d2e7fa41e61aaab2935151a6048a1d8d341162f5b93a0a.svg"
                                height="35"
                                alt="bitcoin"
                              />
                              <img
                                src="//drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/dankort-a92b320b417b7c123265e1e4fe134935ac76ec7e297be9b02a5ef76b182a29cc.svg"
                                height="35"
                                alt="dankort"
                              />
                              <img
                                src="//drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg"
                                height="35"
                                alt="google pay"
                              />
                              <img
                                src="//drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg"
                                height="35"
                                alt="paypal"
                              />
                              <img
                                src="//drou-electronics-store.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
                                height="35"
                                alt="visa"
                              />
                            </div>
                          </div>
                          <div className="product-details-social tooltip-style-4">
                            <span>
                              {" "}
                              <label>Share:</label>
                            </span>

                            <a
                              aria-label="Facebook"
                              className="facebook"
                              href="//www.facebook.com/sharer.php?u=https://drou-electronics-store.myshopify.com/products/lphone-14-pro-max"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                              aria-label="Twitter"
                              className="twitter"
                              href="//twitter.com/share?text=lPhone%2014%20pro%20max&amp;url=https://drou-electronics-store.myshopify.com/products/lphone-14-pro-max;source=webclient"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>

                            <a
                              aria-label="pinterest"
                              className="pinterest"
                              href="//pinterest.com/pin/create/button/?url=https://drou-electronics-store.myshopify.com/products/lphone-14-pro-max&amp;media=http://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335&amp;description=lPhone%2014%20pro%20max"
                            >
                              <i className="fab fa-pinterest-p"></i>
                            </a>
                          </div>
                        </div>
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade bd-example-modal-lg"
              id="size_guide"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header justify-content-end">
                    <button
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="ti-close"></i>{" "}
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="table-responsive">
                      <table className="table-size-guide  table-center">
                        <tbody>
                          <tr>
                            <th>INTERNATIONAL</th>
                            <th>XS</th>
                            <th>S</th>
                            <th>M</th>
                            <th>L</th>
                            <th>XL</th>
                            <th>XXL</th>
                            <th>XXXL</th>
                          </tr>
                          <tr>
                            <td>EUROPE</td>
                            <td>32</td>
                            <td>34</td>
                            <td>36</td>
                            <td>38</td>
                            <td>40</td>
                            <td>42</td>
                            <td>44</td>
                          </tr>
                          <tr>
                            <td>US</td>
                            <td>0</td>
                            <td>2</td>
                            <td>4</td>
                            <td>6</td>
                            <td>8</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>CHEST FIT (INCHES)</td>
                            <td>28"</td>
                            <td>30"</td>
                            <td>32"</td>
                            <td>34"</td>
                            <td>36"</td>
                            <td>38"</td>
                            <td>40"</td>
                          </tr>
                          <tr>
                            <td>CHEST FIT (CM)</td>
                            <td>716</td>
                            <td>76</td>
                            <td>81</td>
                            <td>86</td>
                            <td>91.5</td>
                            <td>96.5</td>
                            <td>101.1</td>
                          </tr>
                          <tr>
                            <td>WAIST FIR (INCHES)</td>
                            <td>21"</td>
                            <td>23"</td>
                            <td>25"</td>
                            <td>27"</td>
                            <td>29"</td>
                            <td>31"</td>
                            <td>33"</td>
                          </tr>
                          <tr>
                            <td>WAIST FIR (CM)</td>
                            <td>53.5</td>
                            <td>58.5</td>
                            <td>63.5</td>
                            <td>68.5</td>
                            <td>74</td>
                            <td>79</td>
                            <td>84</td>
                          </tr>
                          <tr>
                            <td>HIPS FIR (INCHES)</td>
                            <td>33"</td>
                            <td>34"</td>
                            <td>36"</td>
                            <td>38"</td>
                            <td>40"</td>
                            <td>42"</td>
                            <td>44"</td>
                          </tr>
                          <tr>
                            <td>HIPS FIR (CM)</td>
                            <td>81.5</td>
                            <td>86.5</td>
                            <td>91.5</td>
                            <td>96.5</td>
                            <td>101</td>
                            <td>106.5</td>
                            <td>111.5</td>
                          </tr>
                          <tr>
                            <td>SKORT LENGTHS (SM)</td>
                            <td>36.5</td>
                            <td>38</td>
                            <td>39.5</td>
                            <td>41</td>
                            <td>42.5</td>
                            <td>44</td>
                            <td>45.5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade bd-example-modal-lg"
              id="shipping_policy"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header justify-content-end">
                    <button
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="ti-close"></i>{" "}
                    </button>
                  </div>
                  <div className="modal-body">
                    <h4 className="mb-10">Shipping</h4>
                    <ul className="mb-30">
                      <li>
                        Complimentary ground shipping within 1 to 7 business
                        days
                      </li>
                      <li>
                        In-store collection available within 1 to 7 business
                        days
                      </li>
                      <li>
                        Next-day and Express delivery options also available
                      </li>
                      <li>
                        Purchases are delivered in an orange box tied with a
                        Bolduc ribbon, with the exception of certain items
                      </li>
                      <li>
                        See the delivery FAQs for details on shipping methods,
                        costs and delivery times
                      </li>
                    </ul>
                    <h4 className="mb-10">Returns And Exchanges</h4>
                    <ul>
                      <li>Easy and complimentary, within 14 days</li>
                      <li>See conditions and procedure in our return FAQs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade bd-example-modal-md"
              id="ask_about_product"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-md modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle"></h5>
                    <button
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="ti-close"></i>{" "}
                    </button>
                  </div>
                  <div className="modal-body">
                    <form
                      method="post"
                      action="/contact#contact_form"
                      id="contact_form"
                      className="ask_about_product"
                    >
                      <div className="row">
                        <div className="col-12"></div>
                        <div className="col-md-12 mb-40">
                          <input
                            type="text"
                            required
                            placeholder="Name *"
                            className=""
                            name="contact[name]"
                            id="ContactFormName"
                          />
                        </div>
                        <div className="col-md-12 mb-40">
                          <input
                            type="email"
                            required
                            placeholder="Email *"
                            className=""
                            name="contact[email]"
                            id="ContactFormEmail"
                          />
                        </div>
                        <div className="col-lg-12 mb-40">
                          <input
                            type="text"
                            id="ContactFormSubject"
                            name="contact[subject]"
                            placeholder="Phone Number *"
                          />
                        </div>
                        <div className="col-lg-12 mb-40">
                          <textarea
                            placeholder="Your Message *"
                            className="custom-textarea"
                            name="contact[body]"
                            id="ContactFormMessage"
                          ></textarea>
                        </div>
                        <div className="col-lg-12 text-center">
                          <button className="pro-cart"></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="shopify-section-template--14837292236887__single-product-tab"
            className="shopify-section"
          >
            <div className="thumnail-desc">
              <div className="custom-container">
                <div className="thumb-desc-inner">
                  <div className="row">
                    <div className="col-sm-12">
                      <div
                        className="main-thumb-desc nav tabs-area"
                        role="tablist"
                      >
                        <a
                          href="#pro-dec"
                          data-toggle="tab"
                          role="tab"
                          className="active"
                        >
                          Description
                        </a>
                        <a href="#pro-review" data-toggle="tab" role="tab">
                          Reviews
                        </a>
                        <a href="#custom-tab-1" data-toggle="tab" role="tab">
                          Size Chart
                        </a>
                        <a href="#custom-tab-2" data-toggle="tab" role="tab">
                          Shipping Policy
                        </a>
                      </div>

                      <div className="thumb-content tab-content">
                        <div
                          className="tab-pane active"
                          id="pro-dec"
                          role="tabpanel"
                        >
                          <p>
                            <span>
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable. If you are going to use a passage of
                              Lorem Ipsum, you need to be sure there isn't
                              anything embarrassing hidden in the middle of
                              text.
                            </span>
                          </p>
                          <p>
                            <span>
                              All the Lorem Ipsum generators on the Internet
                              tend to repeat predefined chunks as necessary,
                              making this the first true generator on the
                              Internet. It uses a dictionary of over 200 Latin
                              words, combined with a handful of model sentence
                              structures, to generate Lorem Ipsum which looks
                              reasonable.
                            </span>
                          </p>

                          <p>
                            <span>
                              The generated Lorem Ipsum is therefore always free
                              from repetition, injected humour, or
                              non-characteristic words etc.
                            </span>
                          </p>
                          <p></p>
                        </div>

                        <div
                          className="tab-pane "
                          id="pro-review"
                          role="tabpanel"
                        >
                          <div className="review">
                            <div
                              id="shopify-product-reviews"
                              data-id="6852111466583"
                            >
                              <div className="spr-container">
                                <div className="spr-header">
                                  <h2 className="spr-header-title">
                                    Customer Reviews
                                  </h2>
                                  <div className="spr-summary rte">
                                    <span
                                      className="spr-starrating spr-summary-starrating"
                                      aria-label="5.0 of 5 stars"
                                      role="img"
                                    >
                                      <i
                                        className="spr-icon spr-icon-star"
                                        aria-hidden="true"
                                      ></i>
                                      <i
                                        className="spr-icon spr-icon-star"
                                        aria-hidden="true"
                                      ></i>
                                      <i
                                        className="spr-icon spr-icon-star"
                                        aria-hidden="true"
                                      ></i>
                                      <i
                                        className="spr-icon spr-icon-star"
                                        aria-hidden="true"
                                      ></i>
                                      <i
                                        className="spr-icon spr-icon-star"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    <span className="spr-summary-caption">
                                      <span className="spr-summary-actions-togglereviews">
                                        Based on 1 review
                                      </span>
                                    </span>
                                    <span className="spr-summary-actions">
                                      <a
                                        href="#"
                                        className="spr-summary-actions-newreview"
                                      >
                                        Write a review
                                      </a>
                                    </span>
                                  </div>
                                </div>

                                <div className="spr-content">
                                  <div
                                    className="spr-form"
                                    id="form_6852111466583"
                                  ></div>
                                  <div
                                    className="spr-reviews"
                                    id="reviews_6852111466583"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane"
                          id="custom-tab-1"
                          role="tabpanel"
                        ></div>

                        <div
                          className="tab-pane"
                          id="custom-tab-2"
                          role="tabpanel"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14837292236887__6eb6e9d6-d3b5-44bc-857b-1c025ec2f2b2"
          className="shopify-section"
        >
          <div
            className="testimonial-area pt-65 pb-65"
            data-section="testmonial_section"
            id="section-template--14837292236887__6eb6e9d6-d3b5-44bc-857b-1c025ec2f2b2"
          >
            <div className="custom-container">
              <div className="section-title-1 mb-35 text-left ">
                <h2>What's clients say about us</h2>
              </div>

              <div className="testimonial-active-3 nav-style-2-modify-1 dot-style-1 dot-style-1-center dot-style-1-mt1 d-flex mt-5">
                <div className="testimonial-plr-1">
                  <div className="single-testimonial ">
                    <h4>Great quality!</h4>

                    <p>
                      This is a great design and I hope that we will create a
                      website with a good signature. Team90Degree team is
                      reactive and kind. Thanks for the help so far.
                    </p>

                    <div className="client-info">
                      <h5>Luke Olfert</h5>

                      <span>/ Web Developer, Canada</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-plr-1">
                  <div className="single-testimonial ">
                    <h4>Great quality!</h4>

                    <p>
                      This is a great design and I hope that we will create a
                      website with a good signature. Team90Degree team is
                      reactive and kind. Thanks for the help so far.
                    </p>

                    <div className="client-info">
                      <h5>Luke Olfert</h5>

                      <span>/ Web Developer, Canada</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-plr-1">
                  <div className="single-testimonial ">
                    <h4>Great quality!</h4>

                    <p>
                      This is a great design and I hope that we will create a
                      website with a good signature. Team90Degree team is
                      reactive and kind. Thanks for the help so far.
                    </p>

                    <div className="client-info">
                      <h5>Luke Olfert</h5>

                      <span>/ Web Developer, Canada</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" custom-container mb-10">
          <div className="col-sm-12 Latest_products box_content">
            <div className="head">
              <h3 className="title">Custome Products</h3>
              <Link to="/shop" className="view_more">
                View all products <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="list ">
              <Carousel showThumbs={false} wrap-around="true">
                {/* <Item /> */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detail;
