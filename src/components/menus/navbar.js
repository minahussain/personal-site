import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li key="logo" className="nav-item">
                            <img
                                src=""
                                width="24px"
                                height="24px"
                                className="nav-logo"
                                alt="Mina."
                                onClick={this.scrollToTop}
                            />
                        </li>
                        <li key="home" className="nav-item">
                            <Link
                                activeClass="active"
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Home
                            </Link>
                        </li>
                        <li key="projects" className="nav-item">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={60}
                                duration={500}
                            >
                            Projects
                            </Link>
                        </li>
                        <li key="contact" className="nav-item">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Contact
                            </Link>
                        </li>
                        <li key="resume" className="nav-item">
                            <button className="btn-transparent"><a href="#">Resume</a></button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}