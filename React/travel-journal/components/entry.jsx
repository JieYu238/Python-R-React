import React from "react";

export default function Entry() {
  return (
    <div className="container">
      <article className="journal-entry">
        <div className="main-image-container">
          <img
            className="main-image"
            src="./images/japan.jpg"
            alt="Mount fuji"
          />
        </div>
        <div className="info-container">
          <img
            className="marker-icon"
            src="./images/marker.png"
            alt="marker icon"
          />
          <span className="country">Japan</span>
          <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
            View on the Google Map
          </a>
          <h2 className="entry-title">Mount Fuji</h2>
          <p className="trip-dates">12 Jan, 2024 - 24 Jan, 2024</p>
          <p className="entry-text">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </article>
      <article className="journal-entry">
        <div className="main-image-container">
          <img
            className="main-image"
            src="https://tse3.mm.bing.net/th?id=OIP.bCOJmUid-cMwGQtrmOeZrQHaFj&w=355&h=355&c=7"
            alt="Mount Everest"
          />
        </div>
        <div className="info-container">
          <img
            className="marker-icon"
            src="./images/marker.png"
            alt="marker icon"
          />
          <span className="country">China</span>
          <a href="https://www.google.ca/maps/place/Mt+Everest/@27.9881201,86.9249751,14z/data=!4m6!3m5!1s0x39e854a215bd9ebd:0x576dcf806abbab2!8m2!3d27.9881206!4d86.9249751!16zL20vMGJsYmQ?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
            View on the Google Map
          </a>
          <h2 className="entry-title">Mount Everest</h2>
          <p className="trip-dates">12 Jan, 2024 - 24 Jan, 2024</p>
          <p className="entry-text">
            The tallest mountain in the world at 8,848 meters, Everest is a
            bucket-list destination for climbers and a symbol of human ambition
            and endurance.
          </p>
        </div>
      </article>
      <article className="journal-entry">
        <div className="main-image-container">
          <img
            className="main-image"
            src="https://tse3.mm.bing.net/th?id=OIP.w5LVJ45GFBMwD3C4q8j7GAHaE8&w=316&h=316&c=7"
            alt="Lake Baikal"
          />
        </div>
        <div className="info-container">
          <img
            className="marker-icon"
            src="./images/marker.png"
            alt="marker icon"
          />
          <span className="country">Russia</span>
          <a href="https://www.google.ca/maps/place/Lake+Baikal/@53.4088592,99.1421256,5.25z/data=!4m6!3m5!1s0x5dab7dedcf8dd873:0xf2489412c5853349!8m2!3d53.5587003!4d108.1649965!16zL20vMGZwMTA?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
            View on the Google Map
          </a>
          <h2 className="entry-title">Lake Baikal</h2>
          <p className="trip-dates">12 Jan, 2024 - 24 Jan, 2024</p>
          <p className="entry-text">
            The deepest freshwater lake globally, Baikal holds 20% of the
            Earth's unfrozen fresh water, surrounded by stunning Siberian
            landscapes and diverse wildlife.
          </p>
        </div>
      </article>
      <article className="journal-entry">
        <div className="main-image-container">
          <img
            className="main-image"
            src="https://tse3.mm.bing.net/th?id=OIP.7Ap3qVnBEX7kmijenPibfgHaE8&w=316&h=316&c=7"
            alt="Grand Canyon"
          />
        </div>
        <div className="info-container">
          <img
            className="marker-icon"
            src="./images/marker.png"
            alt="marker icon"
          />
          <span className="country">USA</span>
          <a href="https://www.google.ca/maps/place/Grand+Canyon+National+Park/@36.0851433,-114.1656604,8z/data=!3m1!4b1!4m6!3m5!1s0x873312ae759b4d15:0x1f38a9bec9912029!8m2!3d36.2678855!4d-112.3535253!16zL20vMGNucnI?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
            View on the Google Map
          </a>
          <h2 className="entry-title">Grand Canyon</h2>
          <p className="trip-dates">12 Jan, 2024 - 24 Jan, 2024</p>
          <p className="entry-text">
            Carved by the Colorado River, the Grand Canyon reveals billions of
            years of geological history with its dramatic red and orange rock
            formations.
          </p>
        </div>
      </article>
    </div>
  );
}
