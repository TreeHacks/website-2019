import React from "react";
import { faq } from "./content.json";
import useCollapse from "react-collapsed";
import handPoint from "../svg/hand-point.svg";
import lightbulb from "../svg/lightbulb.svg";

const plusList = [
  require("../svg/logo-red.svg"),
  require("../svg/logo-blue.svg"),
  require("../svg/logo-yellow.svg"),
  require("../svg/logo-pink.svg"),
  require("../svg/logo-green.svg"),
];

const FAQItem = ({ q, a, link, textBefore, textIn, textAfter, i }) => {
  // const { getCollapseProps, getToggleProps, isOpen } = useCollapse({expandStyles: {transitionDuration: '200ms'}, collapseStyles: {transitionDuration: '200ms'}});
  return (
    <div className="faq-item" key={q + a}>
      <h2
        className="section-subheading faq-question"
        //{...getToggleProps()}
      >
        <img className="faq-plus" src={plusList[i % plusList.length]} />
        {q}
      </h2>
      <p
        className="faq-answer"
        //{...getCollapseProps()}
      >
        {link ? (
          <>
            {textBefore}
            <a href={link}>{textIn}</a>
            {textAfter}
          </>
        ) : (
          a
        )}
      </p>
    </div>
  );
};

const FAQ = () => {
  return (
    <div id="faq">
      <h1 className="section-heading">Any Questions?</h1>
      <div className="faq-container">
        {faq.map((item, i) => (
          <FAQItem {...item} i={i} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
