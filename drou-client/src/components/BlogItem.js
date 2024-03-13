import { blogEvents } from "../data";
function BlogItem() {
  return (
    <div className="d-flex justify-content-around pd-5">
      {blogEvents.map((item, index) => (
        <div className="item d-flex flex-column " key={index}>
          <div className="img">
            <img src={item.img} alt="" />
          </div>
          <div className="content">
            <div className="date">
              <i className="fa-solid fa-calendar-days"></i>
              <span>{item.date}</span>
            </div>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogItem;
