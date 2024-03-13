import { useEffect, useState } from "react";

function BannerSale() {
  let [saleDay, setSaleDay] = useState(null);
  let [saleHour, setSaleHour] = useState(null);
  let [saleMinutes, setSaleMinutes] = useState(null);
  let [saleSeconds, setSaleSecond] = useState(null);
  
  useEffect(() => {
    const seconds = 1000,
      minutes = seconds * 60,
      hour = minutes * 60,
      day = hour * 24;
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "11/11/",
      endSale = dayMonth + yyyy;
    today = mm + "/" + dd + "/" + yyyy;
    if (today > endSale) {
      endSale = dayMonth + nextYear;
    }
    const countDown = new Date(endSale).getTime();
    const now = new Date().getTime();
    const distance = countDown - now;
    setSaleDay(distance / day);
    setSaleHour((distance % day) / hour);
    setSaleMinutes((distance % hour) / minutes);
    setSaleSecond((distance % minutes) / seconds);
    setTimeout(() => {
      setSaleSecond(saleSeconds--);
      if (saleSeconds <= 0) {
        setSaleMinutes(saleMinutes - 1);
        if (saleMinutes <= 0) {
          setSaleHour(saleHour - 1);
        }
        if (saleHour <= 0) {
          setSaleDay(saleDay - 1);
        }
      }
    }, 1000);
  });

  return (
    <div className="sale_banner box_content">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="content">
              <h5>Hurry Up !</h5>
              <h6>
                Up To 25% Discount <br />
                Check it Out
              </h6>
              <div className="time">
                <div className="item days">
                  <span id="days">{Math.floor(saleDay)}</span> <br />
                  <p>DAYS</p>
                </div>
                <div className="item HRS">
                  <span id="hours">
                    {saleHour < 10
                      ? "0" + Math.floor(saleHour)
                      : Math.floor(saleHour)}
                  </span>{" "}
                  <br />
                  <p>HRS</p>
                </div>
                <div className="item MINS">
                  <span id="minutes">
                    {saleMinutes < 10
                      ? "0" + Math.floor(saleMinutes)
                      : Math.floor(saleMinutes)}
                  </span>{" "}
                  <br />
                  <p>MINS</p>
                </div>
                <div className="item SECS">
                  <span id="seconds">
                    {saleSeconds < 10
                      ? "0" + Math.floor(saleSeconds)
                      : Math.floor(saleSeconds)}
                  </span>{" "}
                  <br />
                  <p>SECS</p>
                </div>
              </div>
              <br />
              <span className="show_now">Shop Now</span>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default BannerSale;
