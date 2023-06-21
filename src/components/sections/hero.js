import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const mobileStyledDiv = styled.div`
  dispay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const factor = 5;
    const timeout = setTimeout(() => {
      setShow(true);
    }, 200 * factor);
    return () => {
      clearTimeout(timeout);
    };
  });

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
      <TransitionGroup component={null}>
        {show &&
          items.map((item, i) => (
            <CSSTransition
              key={`hero-transition-${i}`}
              classNames="fade"
              timeout={300}
            >
              <div
                key={`hero-item-${i}`}
                style={{ transitionDelay: `${i * 7}00ms` }}
              >
                {item}
              </div>
            </CSSTransition>
          ))}
        {show && (
          <CSSTransition
            key={`hero-transition-${items.length}`}
            classNames="slide"
            timeout={300}
          >
            <p
              key={`hero-item-${items.length}`}
              style={{ transitionDelay: `${items.length * 5}00ms` }}
            >
              <a
                href="https://www.linkedin.com/in/hussainmina/"
                aria-label="LinkedIn Button"
              >
                <FaLinkedin size={40} />
              </a>{" "}
              <a
                href="https://github.com/minahussain/"
                aria-label="GitHub Button"
              >
                <FaGithub size={40} />
              </a>{" "}
              <a
                href="https://www.instagram.com/minarrrrrt/"
                aria-label="Instagram Button"
              >
                <FaInstagram size={40} />
              </a>{" "}
              <a
                href="https://www.twitter.com/minab1n"
                aria-label="Twitter Button"
              >
                <FaTwitter size={40} />
              </a>{" "}
            </p>
          </CSSTransition>
        )}
      </TransitionGroup>
    </section>
  );
};

export default Hero;
