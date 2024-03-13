  import { popularProducts } from "../data";

function PopularProducts() {
  return (
    <div className="popular_product box_content">
      <div className="head">
        <h3 className="title">Popular Products</h3>
        <div className="categories">
          <ul>
            <li>Accessories</li>
            <li>iPhone</li>
            <li>Laptop</li>
          </ul>
        </div>
      </div>
      <div className="list">
        {popularProducts.map((item, index) => (
          <div className="item" key={index}>
            <div className="img">
              <div className="show">
                <img src={window.location.origin + "/" + item.img} alt="" />
              </div>
              <div className="hide">
                <img src={item.subImg} alt="" />
              </div>
            </div>
            <div className="content">
              <span className="name">{item.name}</span>
              <h4 className="price">${item.price}.00</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
