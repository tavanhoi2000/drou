import { useEffect, useState } from "react";

function Breadcrumb() {
  const [breadcrumbItems, setBreadcrumbItems] = useState(['Home '])
  useEffect(() => {
    const url = window.location.pathname;
    const path = url.split("/");
    const newBreadcrumbItem = ["Home /"]
    for (let i = 0; i < path.length; i++) {
      if (path !== "") {
        newBreadcrumbItem.push( path[i])
      }
    }
    setBreadcrumbItems(newBreadcrumbItem)
  }, []);

  return (
    <div className="breadcrumb container">
      <ul id="breadcrumb" className="d-flex">
        {breadcrumbItems.map((item, index) => {
          return (<li key={index}>{item}</li>)
        })}
      </ul>
    </div>
  );
}

export default Breadcrumb;
