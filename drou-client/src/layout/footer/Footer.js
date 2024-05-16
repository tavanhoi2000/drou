import "./footer.css";
function Footer() {
  return (
    <div id="shopify-section-footer" className="shopify-section">
      <div id="section-footer">
        <footer className="footer-area pt-70 pb-30">
          <div className="custom-container container d-flex justify-content-between">
            <div className="row">
              <div className="col-width-25 custom-common-column">
                <div className="footer-widget mb-40">
                  <h3 className="footer-title">Contact us</h3>

                  <div className="footer-info">
                    <ul className="footer-block__details-content information">
                      <li>
                        <span style={{ textAlign: "left" }}>
                          Drou Store
                          <p> Ha Noi</p>
                          <p>Vietnam</p>
                        </span>
                      </li>
                      <li>
                        {" "}
                        <span>0395147957</span>
                      </li>
                      <li>
                        <span>tavanhoi00@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-width-22 custom-common-column">
                <div className="footer-widget mb-40">
                  <h3 className="footer-title">Information</h3>

                  <div className="footer-info-list">
                    <ul>
                      <li>
                        <a href="#">Product Support</a>
                      </li>

                      <li>
                        <a href="/checkout">Checkout</a>
                      </li>

                      <li>
                        <a href="#">License Policy</a>
                      </li>

                      <li>
                        <a href="#">Affiliate</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-width-22 custom-common-column">
                <div className="footer-widget mb-40">
                  <h3 className="footer-title">Customer Service</h3>
                  <div className="footer-info-list">
                    <ul>
                      <li>
                        <a href="/pages/about-us">Help Center</a>
                      </li>

                      <li>
                        <a href="/pages/about-us">Redeem Voucher</a>
                      </li>

                      <li>
                        <a href="#">Contact Us</a>
                      </li>

                      <li>
                        <a href="#">Policies & Rules</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-width-31 custom-common-column">
                <div className="footer-widget mb-40">
                  <h3 className="footer-title">Download Our App</h3>

                  <div className="app-visa-wrap">
                    <p>
                      Download our App and get extra 15% Discount on your first
                      Order..!
                    </p>

                    <div className="app-google-img d-flex">
                      <a href="">
                        <img
                          src=" https://cdn.shopify.com/s/files/1/0495/8021/2387/files/app-store.jpg?v=1603274799"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src=" https://cdn.shopify.com/s/files/1/0495/8021/2387/files/google-play.jpg?v=1603274809  "
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
