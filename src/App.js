import Logo from "./Logo.js";
import "./App.css";
import style from "./style.module.css";
import React, { Component } from "react";
import ServiceLogo from "./ServiceLogo.js";
import image from "./map.png";
import Avatar from "./Avatar"
class App extends Component {
  render() {
    return (
      <div className="main">
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
        <div className={style.contcontainer}>
          <div className={style.content}>
            Majsa d dfddf dfkdf fd fsjs ajsj dajdajadjijd kjadijda jsapojda
            jaddjanijad kaddn na jans
          </div>
          <div className={style.image}>
            <img src={image} width="500px" height="350px"></img>
          </div>
         
          
        </div>
        <div className={style.desc}>
          Have you had trouble understanding some of the React lifecycle methods and how to implement them without messing up?

Don’t worry you are not alone. When I first started coding my React app, I ran into situations where I had to take a step back and learn the React lifecycle methods before I could proceed.

Before we get started, I want you to know that the latest React versions have determined that some of the older lifecycle methods are unsafe to use and will be deprecated in React 17. In this blog post we will not learn about the soon to be deprecated unsafe lifecycle methods.
          </div>
        <div className={style.test}>
        <div className={style.testitle}>
Testimonials
</div>

<div className={style.avatar}>
<Avatar />
<div className={style.cname}>
{"Client name"}
</div>
<div className={style.pos}>
{"Position, ORG"}
</div>
</div>
      
        </div>
      </div>
    );
  }
}

export default App;
