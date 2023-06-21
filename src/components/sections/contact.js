import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <p>
      <a
        href="https://www.linkedin.com/in/hussainmina/"
        aria-label="LinkedIn Button"
      >
        <FaLinkedin size={35} />
      </a>{" "}
      <a href="https://github.com/minahussain/" aria-label="GitHub Button">
        <FaGithub size={35} />
      </a>{" "}
      <a
        href="https://www.instagram.com/minarrrrrt/"
        aria-label="Instagram Button"
      >
        <FaInstagram size={35} />
      </a>{" "}
      <a href="https://www.twitter.com/minab1n" aria-label="Twitter Button">
        <FaTwitter size={35} />
      </a>{" "}
    </p>
  );
};

export default Contact;
