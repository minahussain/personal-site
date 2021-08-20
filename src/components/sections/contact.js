import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {

  return (
    <section id="contact" className="jumbotron">
        <h2>Contact</h2>
        <div id="center">
            <p>
                <a href="https://www.instagram.com/minarrrrrt/"
                    aria-label="Instagram Button">
                        <FaInstagram />
                </a>{" "}

                <a href="https://www.linkedin.com/in/hussainmina/"
                    aria-label="LinkedIn Button">
                        <FaLinkedin />
                </a>{" "}

                <a href="https://github.com/minahussain/"
                    aria-label="GitHub Button">
                        <FaGithub />
                </a>{" "}
            </p>
        </div>
    </section>
  );
};

export default Contact;