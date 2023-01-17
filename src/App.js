import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Logo from "./images/logo.svg"
import MainPhoto from "./images/hero-desktop.jpg";

const App = () => {
  return (
    <div className="body">
      <div className="container">
        <header>
          <img className="logo" src={Logo} />

        </header>
        
        <main>
          <div className="wrapper">
            <h1>
              <span className="title">We're</span>
              <br />
              coming
              <br />
              soon
            </h1>
            <p>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <div className="image">
              <img src="./image/hero-desktop.jpg" alt="" />
            </div>
            <form>
              <input
                type="email"
                className="email"
                placeholder="Email Adress"
              />
              <button className="btn" type="submit">
              <SlArrowRight size={20} color="#c010b1" />
              </button>
        
            </form>
          </div>
          
        </main>
        <div>
          <img src={MainPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
