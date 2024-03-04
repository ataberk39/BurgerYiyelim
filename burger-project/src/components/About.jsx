import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../style/About.css"

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom" >
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor dolorum omnis ducimus, officia eaque quos recusandae unde eos ab sequi saepe voluptatem, ex dolore minima incidunt repellendus soluta non? Animi aperiam accusantium asperiores praesentium, nihil consectetur. Ad saepe consectetur ut quia. Temporibus voluptatem dolor, quis laudantium incidunt vel vitae?</p>
      </div>
    </div>
  );
};

export default About;
