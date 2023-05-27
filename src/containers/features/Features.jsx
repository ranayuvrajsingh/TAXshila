import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "GST",
    text: "GST Return filing: As per GST Act, every registered person need to file GST return online before due dates. We need to provide detail of sales, purchases and tax paid, while filing GST return. GST Rules and Acts for filing GST returns are same for all form of business",
  },
  {
    title: "Income Tax",
    text: "How to apply pan card ?  Pan Card is applied by TaxShila experts on government website. One must have adhar card prior to applying pan card.",
  },
  {
    title: "Registration",
    text: "One Person Company (OPC) is a company incorporated by a single person. Before the enforcement of the Companies Act, 2013, a single person could not establish a company. If an individual wanted to establish his business, he/she could opt only for a sole proprietorship as there had to be a minimum of two directors and two members to establish a company.",
  },
  {
    title: "Business Service",
    text: "TaxShila has launched GST and Income Tax Consultancy service at very low prices*. Now days, each consultancy by GST expert or Income Tax expert can cost you several thousands and can go up to lakhs. We at Mads Money are providing custom made tax guide in few hundreds.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text"></h1>
      <p>Request Early Access to Get Started</p>
    </div>

    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
