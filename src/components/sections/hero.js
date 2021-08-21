import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Hero = () => {
  let [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {setShow(true)}, 300 * 10);
    return () => {clearTimeout(timeout)};
  }, []);

  const intro = <h1 className="regular">Welcome, I am</h1>;
  const name = <h1>Mina Hussain</h1>;
  const brief = (
    <div id="bio">
      <h3>
        A software dev in the bay area.<br />
        I operate on coffee, observation, <br />and ~imagination~{" "}
        <span role="img" aria-label="Rainbow emoji">
          🌈
        </span><br />
      </h3>
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
          <CSSTransition key={i} classNames="dropdown" timeout={300} unmountOnExit>
            <div style={{ transitionDelay: `${i * 6}00ms` }}>{item}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
};

export default Hero;