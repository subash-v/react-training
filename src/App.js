import Logo from "./Logo.js";
import "./App.css";
import style from "./style.module.css";
import React, { Component } from "react";
import ServiceLogo from "./ServiceLogo.js";
class App extends Component {
  render() {
    return (
      <div className>
        <div className={style.base}>
          <div className={style.menu}></div>
          <div className={style.logo}>
            COMPANY<span className={style.subLogo}> LOGO</span>
          </div>
          <div className={style.navContainer}>
            <div className={style.nav}>
              <div className={style.navList}>About</div>
              <div className={style.navList}>Service</div>
              <div className={style.navList}>Solutions</div>
              <div className={style.navList}>Blog</div>
            </div>
            <div className={style.button}>
              {/* <div className={style.messageIcon}></div> */}
              <div className={style.buttonText}>Get In Touch</div>
            </div>
          </div>
          <div className={style.message}></div>
        </div>
        <div className={style.banner}>
          <div className={style.bannertxt}>
            Integer bibendum sit amet arcu vel agestas.
          </div>
          <div className={style.sercontainer}>
            <div className={style.service}>
              <ServiceLogo height="90px" width="105px"></ServiceLogo>
              Service Name
            </div>
            <div className={style.service}>
              <ServiceLogo height="90px" width="105px"></ServiceLogo>
              Service Name
            </div>
            <div className={style.service}>
              <ServiceLogo height="90px" width="105px"></ServiceLogo>
              Service Name
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
