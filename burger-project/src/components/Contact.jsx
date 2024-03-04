import React, { useState } from "react";
import "../style/Contact.css";
import BannerImage from "../assets/banner.png";
import DataObj from "../helpers/FormData.jsx";

const Contact = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    mesaj: "",
  });

  const inputNameChange = (event) => {
    let valueCatcher = event.target.value;
    let nameCatcher = event.target.name;

    let tempObj = {
      ...FormData,
      [nameCatcher]: valueCatcher,
    };
    setFormData(tempObj);
  };

  const inputEmailChange = (event) => {
    let valueCatcher = event.target.value;
    let nameCatcher = event.target.name;

    let tempObj = {
      ...FormData,
      [nameCatcher]: valueCatcher,
    };
    setFormData(tempObj);
  };
  const inputMesajChange = (event) => {
    let valueCatcher = event.target.value;
    let nameCatcher = event.target.name;

    let tempObj = {
      ...FormData,
      [nameCatcher]: valueCatcher,
    };
    setFormData(tempObj);
    
  };

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    let tempData = await DataObj.postData(
      FormData.name,
      FormData.email,
      FormData.mesaj
    );
    
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form action="" onSubmit={handleSubmit}>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınız giriniz..."
            onChange={inputNameChange}
            value={FormData.name}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
            onChange={inputEmailChange}
            value={FormData.email}
          />
          <label>Ad Soyad</label>
          <textarea
            type="text"
            name="mesaj"
            rows="6"
            placeholder="Lütfen mesaj giriniz..."
            onChange={inputMesajChange}
            value={FormData.mesaj}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        
      </div>
    </div>
  );
};

export default Contact;
