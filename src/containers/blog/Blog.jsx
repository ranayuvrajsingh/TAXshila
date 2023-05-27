import React from "react";
import Article from "../../components/article/Article";
import {
  WhyUs,
  Digital_India_logo,
  Stats,
  feature1min,
  Taxshila,
} from "./imports";
// import { WhyUs } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      {/* <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1> */}
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={WhyUs}
          // date="Sep 26, 2021"
          // text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div style={{ color: "white" }} className="gpt3__blog-container_groupB">
        <Article
          imgUrl={Digital_India_logo}
          // date="Sep 26, 2021"
          // text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={Stats}
          // date="Sep 26, 2021"
          // text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={feature1min}
          // date="Sep 26, 2021"
          // text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={Taxshila}
          // date="Sep 26, 2021"
          // text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  </div>
);

export default Blog;
