import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import Contact from "./contact";

const mobileStyledDiv = styled.div`
  dispay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = () => {
  const [show, setShow] = useState(false);
  const [isDesktop, setDesktop] = useState(false);
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (isBrowser) console.log("inside useEffect and isBrowser is true");
    if (isBrowser) setDesktop(window.innerWidth > 800);
  }, [isBrowser]);

  useEffect(() => {
    const factor = isDesktop ? 11 : 2;
    const timeout = setTimeout(() => {
      setShow(true);
    }, 200 * factor);
    return () => {
      clearTimeout(timeout);
    };
  }, [isDesktop]);

  const name = (
    <div className="name">
      <h1 style={{ opacity: 0.8 }}>MINA HUSSAIN</h1>
    </div>
  );
  const brief = (
    <div className="bio">
      <h4>
        Frontend dev from MD and located in the bay area. Operating on coffee,
        observation, and ~imagination~{" "}
        <span role="img" aria-label="Rainbow emoji">
          🌈
        </span>
      </h4>
    </div>
  );
  const contact = (
    <div className="contact">
      <button>
        <a href={`mailto:minahssn0@gmail.com`}>Get In Touch</a>
      </button>
    </div>
  );

  const items = [name, brief];

  return (
    <section id="hero" className="jumbotron">
      {items.map((item, i) => (
        <div>{item}</div>
      ))}
      <Contact />
    </section>
  );
};

export default Hero;
