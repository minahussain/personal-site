import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Hero = () => {
  let [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(()=>setShow(true), 1000);
  }, [])

  const intro = <h1 className="regular">Welcome, I'm{" "}</h1>
  const name = <h1>Mina Hussain</h1>;
  const brief = (
    <div id="bio">
      <p>
        <h3>
          A software dev in the bay area.<br />
          I operate on coffee, observation, <br />and ~imagination~{" "}
          <span role="img" aria-label="Rainbow emoji">
            🌈
          </span><br />
        </h3>
      </p>
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
        {items.map((item, i) => (
          <CSSTransition in={show} key={i} classNames="fadeup" timeout={300}>
            <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
};

export default Hero;