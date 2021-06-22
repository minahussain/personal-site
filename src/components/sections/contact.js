import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {

  return (
    <section id="contact" className="jumbotron">
        <h2>Contact</h2>
        <div id="center">
            <p>
                <a href="https://www.instagram.com/minarrrrrt/"><FaInstagram /></a>{" "}

                <a href="https://www.linkedin.com/in/hussainmina/"><FaLinkedin /></a>{" "}

                <a href="https://github.com/minahussain/"><FaGithub /></a>{" "}
            </p>
        </div>
    </section>
  );
};

export default Contact;