import React from 'react';
import './Banner.css';
import banner2 from "../../assets/img/banner2.jpg";

function Banner() {
  return <div className="banner-container" style={{ backgroundImage: `url(${banner2})` }}></div>;
}

export default Banner;