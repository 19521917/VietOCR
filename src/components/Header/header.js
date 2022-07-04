import React from "react";
import Navbar from "./Navbar/Navbar.js";
import video from "../../video/writing.mp4";
import img_slide from "../../img/slide.jpg";

const Header = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <header id="home">
        <Navbar />
        <div class="banner">
          <div class="container">
            <video
              controls={false}
              muted={true}
              autoPlay={true}
              loop={true}
              class="video-container"
            >
              <source src={video} type="video/mp4" />
            </video>
            {/* <img src={img_slide} alt="test" class="video-container"></img> */}
            <h1>
              VietOCR: Vietnamese Handwriting Recognition with Pre-trained
              Models
            </h1>
            <p>19521917: Nguyễn Ngọc Thái Nguyên</p>
            <p>19521913: Nguyễn Đức Phương Nguyên</p>
            <h3>GVHD: Nguyễn Vinh Tiệp</h3>
            <a href="#howitworks" class="scroll-link btn btn-white">
              more
            </a>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
