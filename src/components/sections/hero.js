import React from 'react';

const Hero = () => {
  const name = <h1 className="big-heading">Mina Hussain</h1>;;
  const brief = (
    <h3>
      A software dev from Maryland, currently living in the bay area.
      <br />
      I operate on intuition, observation, and ~imagination~{" "}
      <span role="img" aria-label="Rainbow emoji">
        🌈
      </span>
      <br /><br />
      Lets work together!
    </h3>
  );
  const contact = (
    <a href={`mailto:saminahu@gmail.com`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [name, brief, contact];

  return (
    <section id="hero" className="jumbotron">
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </section>
  );
};

export default Hero;