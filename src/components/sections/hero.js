import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Hero = () => {
  const [show, setShow] = useState(false);
  const [isDesktop, setDesktop] = useState(false);
  const isBrowser = typeof window !== "undefined";

  function handleWindowSizeChange() {
    if (isBrowser) console.log("inside handleWindowSizeChange and isBrowser is true");
    if (isBrowser) {
      setDesktop(window.innerWidth > 800);
      console.log("desktop: " + isDesktop + " window innerWidth: " + window.innerWidth);
    }
  }

  useEffect(() => {
    if (isBrowser) console.log("inside useEffect and isBrowser is true");
    if (isBrowser) setDesktop(window.innerWidth > 800);
  }, [isBrowser]);

  useEffect(() => {
    const factor = isDesktop ? 11 : 2;
    const timeout = setTimeout(() => {setShow(true)}, 300 * factor);
    return () => {clearTimeout(timeout)};
  }, [isDesktop]);

  const intro = <h5>Welcome, I am</h5>;
  const name = <h1>Mina Hussain</h1>;
  const brief = (
    <div id="bio">
      <h4>
        A software dev in the bay area.<br />
        I operate on coffee, observation, <br />and ~imagination~{" "}
        <span role="img" aria-label="Rainbow emoji">
          🌈
        </span><br />
      </h4>
    </div>
  );
  const contact = (
    <button><a href={`mailto:saminahu@gmail.com`}>
      Get In Touch
    </a></button>
  );

  const items = [intro, name, brief, contact];

  return (
    <section id="hero" className="jumbotron">
        <TransitionGroup component={null}>
          { show && 
            items.map((item, i) => (
            <CSSTransition key={i} classNames="dropup" timeout={300} unmountOnExit>
              <div style={{ transitionDelay: `${i * 10}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
        </TransitionGroup>
    </section>
  );
};

export default Hero;