import { latestProducts } from "../data";
function Item() {
  return (
    <div className="d-flex justify-content-between">
      {latestProducts.map((item, index) => (
        <div className="item" key={index}>
          <div className="img" style={{marginBottom: 60}}>
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
  );
}
export default Item;
