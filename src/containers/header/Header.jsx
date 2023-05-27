import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import TaxShila from "../../assets/Taxshilabg.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        <b>बनो आत्मनिर्भर</b> with Unique Financial Super Market Model
      </h1>
      <p style={{ color: "orange" }}>
        <span className="gradient__text">
          Start Your Own BusinessNeed Help?{" "}
        </span>
        <span
          style={{
            color: "lightgreen",
          }}
        >
          {" "}
          Callback is always freeRequest Callback बनो आत्मनिर्भर with Unique
          Financial Super Market Model Start Your Own Business Low Cost Start
          Up.
          <hr />
        </span>
        If you are looking to start your own business or expand your business,
        our innovative business model gives you the flexibility to grow your
        business with little setup costs..
      </p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button className="gpt3__header-content__input_btn" type="button">
          Get Started
        </button>
      </div> */}

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img style={{ Backgroundcolor: "red" }} src={TaxShila} />
    </div>
  </div>
);

export default Header;
