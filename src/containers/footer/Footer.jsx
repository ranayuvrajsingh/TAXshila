import React from "react";
import gpt3Logo from "../../logo.svg";
import "./footer.css";
import WhatsAppContactButton from "../../components/whatsapp/Whatsaap";
import Emaildirect from "../../components/Email/Emaildirect";
import logo1 from "../../assets/Taxshilabg.png";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      {/* <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1> */}
    </div>

    {/* <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo1} alt="gpt3_logo" />
        <p>
          Dehradun,India, <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Dehradun India</p>
        <p>+91 8923620620</p>
        <p>+91 92584 97676</p>
        <Emaildirect />
      </div>
    </div>
    <div className="whatsapp">
      <WhatsAppContactButton />
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 TaxShila. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
