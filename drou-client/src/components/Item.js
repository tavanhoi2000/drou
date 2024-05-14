function Item({ latestProducts }) {
  return (
    <div className="d-flex justify-content-between">
      {latestProducts.map((product, index) => (
        <a href={`/shop/${product.id}`}>
          <div className="item" key={index}>
            <div className="img" style={{ marginBottom: 60 }}>
              <div className="show">
                <img src={product.images} alt="" />
              </div>
              <div className="hide">
                <img src={product.subImg} alt="" />
              </div>
            </div>
            <div className="content">
              <span className="name">{product.name}</span>
              <h4 className="price">${product.price}</h4>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
export default Item;
