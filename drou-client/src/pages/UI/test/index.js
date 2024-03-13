import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { getProducts } from "../../../features/products/productSlice";

function Test() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    const status = useSelector((state) => state.status)
    console.log(products,status)

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])
    return (
        <div
        id="shopify-section-template--14772521828439__main"
        className="shopify-section"
      >
        <div className="main-shop-page ptb-90">
          <div className="custom-container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9  col-12">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="grid-list-top border-default universal-padding d-md-flex justify-content-md-between align-items-center mb-30">
                      <div className="grid-list-view d-flex align-items-center  mb-sm-15">
                        <button className="change-view active" data-view="grid">
                          <i className="fa fa-th"></i>
                        </button>
                        <button className="change-view" data-view="list">
                          <i className="fa fa-list-ul"></i>
                        </button>
                      </div>
                      <span className="show-items">
                        Showing 1 - 9 of {products.length} result
                      </span>
                      <div className="main-toolbar-sorter clearfix">
                        <div className="toolbar-sorter d-md-flex align-items-center">
                          <label htmlFor="SortBy">Sort by:</label>
                          <select
                            className="sorter wide"
                            name="SortBy"
                            id="SortBy"
                          >
                            <option value="manual">Featured</option>
                            <option value="best-selling">Best Selling</option>
                            <option value="title-ascending">
                              Alphabetically, A-Z
                            </option>
                            <option value="title-descending">
                              Alphabetically, Z-A
                            </option>
                            <option value="price-ascending">
                              Price, low to high
                            </option>
                            <option value="price-descending">
                              Price, high to low
                            </option>
                            <option value="created-descending">
                              Date, new to old
                            </option>
                            <option value="created-ascending">
                              Date, old to new
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop-grid">
                  <div className="product-grid-view">
                    <div className="row">
                      {products.map((item) => (
                        <div
                          className="col-lg-4 col-md-4 col-sm-6 col-12"
                          key={item.id}
                        >
                          <div className="single-product-wrap 40092812050519">
                            <div className="product-img-action-wrap mb-20">
                              <div className="product-img product-img-zoom">
                                <Link to={`/shop/${item.id}`}>
                                  <img
                                    className="popup_cart_image default-img"
                                    src={item.images}
                                    alt={item.name}
                                  />

                                  <img
                                    className="hover-img "
                                    src={item.subImg}
                                    alt={item.name}
                                  />
                                </Link>
                              </div>

                              <div className="product-action-1">
                                <button
                                >
                                  <i className="far fa-shopping-bag"></i>
                                </button>

                                <span className="nrb_wlist">
                                  <a className="action-wishlist wishlist-btn wishlist">
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
                                </span>
                                <button className="compare compare_btn">
                                  <i className="far fa-signal"></i>
                                </button>
                              </div>
                            </div>

                            <div className="product-content-wrap">
                              <span className="shopify-product-reviews-badge"></span>
                              <h2>
                                <Link to={`/shop/${item.id}`}>{item.name}</Link>
                              </h2>
                              <div className="product-price">
                                <span className="price">
                                  <span className="money">
                                    ${item.price}.00
                                  </span>
                                </span>

                                <span className="prev-price">
                                  {item.salePrice && (
                                    <del className="money">
                                      ${item.salePrice}.00
                                    </del>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div> 
                      ))}
                    </div>
                    <div className="shop_pagi">
                      <div className="pro-pagination-style text-center mt-55">
                        <ul className="">
                          <li className="disabled prev">
                            <a href="#">
                              <i className="fa-solid fa-chevron-left"></i>
                            </a>
                          </li>

                          <li>
                            <a className="active" href="">
                              1
                            </a>
                          </li>

                          <li>
                            <a href="/collections/all?page=2" title="">
                              2
                            </a>
                          </li>

                          <li className="next">
                            <a
                              href="/collections/all?page=2"
                              title="Next &raquo;"
                            >
                              <i className="fa-solid fa-chevron-right"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mt-all-40">
                <div className="sidebar shop-sidebar">
                  <div className="sidebar-widget sidebar-widget-wrap sidebar-widget-padding-2 mb-20">
                    <h4 className="sidebar-widget-title">Search </h4>

                    <div className="search-style-3">
                      <form  method="get">
                        <input
                          type="search"
                          placeholder="Search our store "
                          aria-label="Search our store "
                        />
                      </form>
                    </div>
                  </div>

                  <div className="single-widget widget-recommended-products mt-30">
                    <h3 className="sidebar-title">Top rated products</h3>
                    <div className="recommended-products-slider-2 slider-navigation-2 slider-navigation-2-m0">
                      <div className="product-slider-col">
                        <article className="hoproduct hoproduct-4">
                          <div className="hoproduct-image">
                            <a
                              className="hoproduct-thumb"
                              href="/collections/all/products/drou-watch-ultra"
                            >
                              <img
                                className="hoproduct-frontimage"
                                src="//drou-electronics-store.myshopify.com/cdn/shop/products/13_800X800_crop_center.jpg?v=1674275345"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="hoproduct-content">
                            <h5 className="hoproduct-title">
                              <a href="/collections/all/products/drou-watch-ultra">
                                Drou watch ultra
                              </a>
                            </h5>
                            <div className="hoproduct-rattingbox">
                              <div className="rattingbox">
                                <span
                                  className="shopify-product-reviews-badge"
                                  data-id="6852111532119"
                                ></span>
                              </div>
                            </div>
                            <div className="hoproduct-pricebox">
                              <div className="pricebox">
                                <del className="oldprice">
                                  <span className="money">$85.00</span>
                                </del>

                                <span className="price">
                                  <span className="money">$70.00</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="product-slider-col">
                        <article className="hoproduct hoproduct-4">
                          <div className="hoproduct-image">
                            <a
                              className="hoproduct-thumb"
                              href="/collections/all/products/droubook-air-space-gray"
                            >
                              <img
                                className="hoproduct-frontimage"
                                src="//drou-electronics-store.myshopify.com/cdn/shop/products/p2_ea1ad2a2-ba0d-4dd2-b29a-e51fd931583b_800X800_crop_center.jpg?v=1674275324"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="hoproduct-content">
                            <h5 className="hoproduct-title">
                              <a href="/collections/all/products/droubook-air-space-gray">
                                Droubook space gray
                              </a>
                            </h5>
                            <div className="hoproduct-rattingbox">
                              <div className="rattingbox">
                                <span
                                  className="shopify-product-reviews-badge"
                                  data-id="6852111401047"
                                ></span>
                              </div>
                            </div>
                            <div className="hoproduct-pricebox">
                              <div className="pricebox">
                                <span className="price">
                                  <span className="money">$80.00</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="product-slider-col">
                        <article className="hoproduct hoproduct-4">
                          <div className="hoproduct-image">
                            <a
                              className="hoproduct-thumb"
                              href="/collections/all/products/homepod-mini-2022"
                            >
                              <img
                                className="hoproduct-frontimage"
                                src="//drou-electronics-store.myshopify.com/cdn/shop/products/11_c6c97b67-edac-48bd-8e5c-cf0de5e9e3cb_800X800_crop_center.jpg?v=1674275302"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="hoproduct-content">
                            <h5 className="hoproduct-title">
                              <a href="/collections/all/products/homepod-mini-2022">
                                Homepod mini 2022
                              </a>
                            </h5>
                            <div className="hoproduct-rattingbox">
                              <div className="rattingbox">
                                <span
                                  className="shopify-product-reviews-badge"
                                  data-id="6852111204439"
                                ></span>
                              </div>
                            </div>
                            <div className="hoproduct-pricebox">
                              <div className="pricebox">
                                <del className="oldprice">
                                  <span className="money">$60.00</span>
                                </del>

                                <span className="price">
                                  <span className="money">$39.00</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>

                  <aside className="sidebar-categorie mb-30">
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="sidbar-style">
                      <li className="">
                        <a href="/collections/accessories">
                          Accessories <span>(9)</span>
                        </a>
                      </li>

                      <li className="">
                        <a href="/collections/headphones">
                          Headphones <span>(8)</span>
                        </a>
                      </li>

                      <li className="active">
                        <a href="/collections/iphone">
                          iPhone <span>(8)</span>
                        </a>
                      </li>

                      <li className="">
                        <a href="/collections/laptop">
                          Laptop <span>(8)</span>
                        </a>
                      </li>

                      <li className="">
                        <a href="/collections/mini-speakers">
                          Mini speakers <span>(8)</span>
                        </a>
                      </li>
                    </ul>
                  </aside>

                  <aside className="size mb-30">
                    <h3 className="sidebar-title">Size</h3>
                    <ul className="size-list sidbar-style">
                      <li>
                        <a href="/collections/all/s">s</a>
                      </li>

                      <li>
                        <a href="/collections/all/m">m</a>
                      </li>

                      <li>
                        <a href="/collections/all/l">l</a>
                      </li>

                      <li>
                        <a href="/collections/all/xl">xl</a>
                      </li>

                      <li>
                        <a href="/collections/all/xxl">xxl</a>
                      </li>
                    </ul>
                  </aside>

                  <div className="sidebar-tags sidebar-categorie">
                    <h3 className="sidebar-title">Tags</h3>
                    <ul className="sidbar-style">
                      <li>
                        <a href="/collections/all/black">black</a>
                      </li>
                      <li>
                        <a href="/collections/all/blue">blue</a>
                      </li>
                      <li>
                        <a href="/collections/all/fiber">fiber</a>
                      </li>
                      <li>
                        <a href="/collections/all/gold">gold</a>
                      </li>
                      <li>
                        <a href="/collections/all/gray">gray</a>
                      </li>
                      <li>
                        <a href="/collections/all/green">green</a>
                      </li>
                      <li>
                        <a href="/collections/all/l">l</a>
                      </li>
                      <li>
                        <a href="/collections/all/leather">leather</a>
                      </li>
                      <li>
                        <a href="/collections/all/m">m</a>
                      </li>
                      <li>
                        <a href="/collections/all/magenta">magenta</a>
                      </li>
                      <li>
                        <a href="/collections/all/maroon">maroon</a>
                      </li>
                      <li>
                        <a href="/collections/all/metal">metal</a>
                      </li>
                      <li>
                        <a href="/collections/all/navy">navy</a>
                      </li>
                      <li>
                        <a href="/collections/all/opt1">opt1</a>
                      </li>
                      <li>
                        <a href="/collections/all/opt2">opt2</a>
                      </li>
                    </ul>
                  </div>

                  <aside className="color mb-30">
                    <h3 className="sidebar-title">Color</h3>
                    <div className="color-option sidbar-style sidebar-color-list tooltip-style-3">
                      <ul>
                        <li className="red">
                          <a
                            style={{
                              background: "red no-repeat center",
                              backgroundSize: "initial",
                            }}
                            aria-label="red"
                            href="/collections/all/red"
                          >
                            {" "}
                            red
                          </a>
                        </li>

                        <li className="green">
                          <a
                            style={{
                              background: "green no-repeat center",
                              backgroundSize: "initial",
                            }}
                            aria-label="green"
                            href="/collections/all/green"
                          >
                            {" "}
                            green
                          </a>
                        </li>

                        <li className="blue">
                          <a
                            style={{
                              background: "blue no-repeat center",
                              backgroundSize: "initial",
                            }}
                            aria-label="blue"
                            href="/collections/all/blue"
                          >
                            {" "}
                            blue
                          </a>
                        </li>

                        <li className="yellow">
                          <a
                            style={{
                              background: "yellow no-repeat center",
                              backgroundSize: "initial",
                            }}
                            aria-label="yellow"
                            href="/collections/all/yellow"
                          >
                            {" "}
                            yellow
                          </a>
                        </li>

                        <li className="white">
                          <a
                            style={{
                              background: "white no-repeat center",
                              backgroundSize: "initial",
                            }}
                            aria-label="white"
                            href="/collections/all/white"
                          >
                            {" "}
                            white
                          </a>
                        </li>

                        <li className="gold">
                          <a
                            style={{
                              background: "gold no-repeat center",
                              backgroundSize: "initial",
                            }}
                            aria-label="gold"
                            href="/collections/all/gold"
                          >
                            {" "}
                            gold
                          </a>
                        </li>

                        <li className="gray">
                          <a
                            style={{
                              background: "gray no-repeat center",
                              backgroundSize: "initial",
                            }}
                            aria-label="gray"
                            href="/collections/all/gray"
                          >
                            {" "}
                            gray
                          </a>
                        </li>

                        <li className="magenta">
                          <a
                            style={{
                              background: "magenta no-repeat center",
                              backgroundSize: "initial",
                            }}
                            aria-label="magenta"
                            href="/collections/all/magenta"
                          >
                            {" "}
                            magenta
                          </a>
                        </li>

                        <li className="maroon">
                          <a
                            style={{
                              background: "maroon no-repeat center",
                              backgroundSize: "initial",
                            }}
                            aria-label="maroon"
                            href="/collections/all/maroon"
                          >
                            {" "}
                            maroon
                          </a>
                        </li>

                        <li className="navy">
                          <a
                            style={{
                              background: "navy no-repeat center",
                              backgroundSize: "initial",
                            }}
                            aria-label="navy"
                            href="/collections/all/navy"
                          >
                            {" "}
                            navy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Test
