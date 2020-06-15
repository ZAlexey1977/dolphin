import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmrcMhf1ryROlDoJhodNG9aflR_LG91MhcSQA8V2xZFR_U-jME&usqp=CAU" />
      <span className={s.slogan}>Dolphin - your assistant in sea of code!</span>
    </header>
  );
};

export default Header;
