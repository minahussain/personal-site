import React, { Component } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="socials" id="socialsbar">
                <div className="socials-content">
                    <ul className="socials-items">
                        <li className="socials-item" key="ig">
                            <a href="https://www.instagram.com/minarrrrrt/"><FaInstagram /></a>
                        </li>
                        <li className="socials-item" key="li">
                            <a href="https://www.linkedin.com/in/hussainmina/"><FaLinkedin /></a>
                        </li>
                        <li className="socials-item" key="gh">
                            <a href="https://github.com/minahussain/"><FaGithub /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}