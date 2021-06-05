import React, { useState } from "react";
import { questions } from "./Api";
import "./accordion.css";
import Myaccordion from "./Myaccordion";

const Accordion = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main-div">
        <h1>AWS Interview Question</h1>
        {data.map((currentElement) => {
          const { id } = currentElement;
          return <Myaccordion key={id} {...currentElement} />;
        })}
      </section>
    </>
  );
};

export default Accordion;
