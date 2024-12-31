import React from "react";

export default function Entry({ img, name, country, link, desc }) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={img} alt={name} />
      </div>
      <div className="info-container">
        <img
          className="marker-icon"
          src="./images/marker.png"
          alt="marker icon"
        />
        <span className="country">{country}</span>
        <a href={link}>View on the Google Map</a>
        <h2 className="entry-title">{name}</h2>
        <p className="trip-dates">12 Jan, 2024 - 24 Jan, 2024</p>
        <p className="entry-text">{desc}</p>
      </div>
    </article>
  );
}
