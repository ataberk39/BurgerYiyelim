import React from "react";
import { Data } from "../helpers/Data";
import MenuList from "./MenuList";
import "../style/Menu.css"

const Menu = () => {
  console.log(Data);
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, index) => {
          return (
            <MenuList
              image={menuItem.image}
              name={menuItem.namme}
              content={menuItem.content}
              price={menuItem.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
