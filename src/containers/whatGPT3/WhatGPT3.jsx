import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="TAXshila "
        text=" model was founded to create additional business opportunities for ambitious entrepreneurs from different regions and provide quality and economic taxation services to taxpayers and business professionals."
      />
    </div>
    {/* <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div> */}

    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Financial Super Market"
        text="We wish to empower new, existing, and experienced entrepreneurs with a Financial Super Market"
      />
      {/* <Feature
        title="Shivam Rana"
        text=" in North India. He is amongst the youngest person in India to clear CA. He was also featured in an interview with India’s most followed motivational speaker and well-known entrepreneur, "
      /> */}
      {/* <Feature
        title="Education"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      /> */}
    </div>
  </div>
);

export default WhatGPT3;
