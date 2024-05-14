import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./redux/homeAction"
const Slider = lazy(() => import("../../../components/Slider"));
const Item = lazy(() => import("../../../components/Item"));
const BannerSale = lazy(() => import("../../../components/BannerSale"));
const PopularProducts = lazy(() =>
  import("../../../components/PopularProducts")
);
const BlogItem = lazy(() => import("../../../components/BlogItem"));
function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {listCategories, latestProducts} = useSelector((state) => ({
    listCategories: state.home.categories,
    latestProducts: state.home.latestProducts
  }))

  const filterProduct = {
    page: 1,
    category_id: null,
    limit: 6,
  };

  const getListProductByCategory = (category) => {
    filterProduct.category_id = category
    dispatch(actions.fetchProductsAction(filterProduct))
  }


  const getListLatestProduct = () => {
    filterProduct.limit = 5
    dispatch(actions.fetchLatestProductsActions(filterProduct))
  }

  const getListCategories = () => {
    dispatch(actions.fetchCategoriesAction())
  }

  const breakpointsev = {
    700: {
      itemsToShow: 2,
      snapAlign: "center",
    },
    1024: {
      itemsToShow: 3,
      snapAlign: "start",
    },
  };

  useEffect(() => {
    getListCategories()
    getListLatestProduct()
  },[])

  return (
    <>
      <Suspense>
        <Slider />
      </Suspense>
      <div className="container">
        <div className="categories box_content">
          <h3>Trending Categories</h3>
          <div className="d-flex justify-content-around">
            {listCategories.map((item, i) => (
              <div className="item" key={i}>
                <img src={item.image} alt="" /> <br />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="featured_product box_content">
          <div className="inside row gap-4">
            <div className="item col-lg-6 col-sm-12">
              <div className="content">
                <span className="category">Security Smart Camera</span>
                <h3 className="price">Just Starting At $850</h3>
                <Link to="/shop">Shop Now</Link>
              </div>
              <img src="images/sub-banner-1.jpg" alt="" />
            </div>

            <div className="item col-lg-6 col-sm-12">
              <div className="content">
                <span className="category">Entertainment & Games</span>
                <h3 className="price">Just Starting at $850 Hurry up!</h3>
                <Link to="/shop">Shop Now</Link>
              </div>
              <img src="images/sub-banner-2.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="Latest_products box_content">
          <div className="head">
            <h3 className="title">Latest Products</h3>
            <a href="/shop" className="view_more">
              View all products <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="list">
            <Carousel showThumbs={false} wrap-around="true">
              <Suspense>
                <Item latestProducts={latestProducts}/>
              </Suspense>
            </Carousel>
          </div>
        </div>
        <Suspense>
          <BannerSale />
        </Suspense>

        <div className="container">
          <Suspense>
            {" "}
            <PopularProducts />
          </Suspense>
          <div className="blog_event box_content">
            <div className="head">
              <h3 className="title">Blog & Events</h3>
              <div className="view_more">
                View all Events <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="list">
              <Carousel
                showThumbs={false}
                breakpoints={breakpointsev}
                wrap-around={true}
                className="mt-5"
              >
                <Suspense>
                  <BlogItem />
                </Suspense>
              </Carousel>
            </div>
          </div>
          <div className="ads box_content">
            <div className="content">
              <span>BIG DISCOUNT </span>
              <h5>Google Pixel Smart Phone</h5>
              <h4>$350.00</h4>
              <button onClick={() => navigate('/shop')}>Show Now</button>
            </div>
            <img src="images/slide61.jpg" alt="" />
          </div>

          <div className="offer box_content">
            <div className="container">
              <div className="item">
                <img src="images/icon_1.png" alt="" />
                <h4>Free delivery</h4>
                <span>And free returns. See checkout for delivery dates.</span>
              </div>
              <div className="item">
                <img src="images/icon_2.png" alt="" />
                <h4>Pay monthly at 0% APR</h4>
                <span>
                  Choose to check out with Apple Card Monthly Installments.
                </span>
              </div>
              <div className="item">
                <img src="images/icon_3.png" alt="" />
                <h4>Personalize it</h4>
                <span>
                  Engrave your device with your name or a personal note.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
