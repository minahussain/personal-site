import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { navbarLinks } from '@config';

const Navbar = () => {
    let [show, setShow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {setShow(true)}, 100);
        return () => {clearTimeout(timeout)}
    }, []);

    return (
        <nav className="nav" id="navbar">
            <div className="nav-content">
                <ul className="nav-items">
                    <TransitionGroup component={null}>
                      { show && 
                        navbarLinks.map(({ name, url }, i) => (
                          <CSSTransition key={i} classNames="fade" timeout={100}>
                            <li key={i} className="nav-item" style={{ transitionDelay: `${i * 8}00ms` }}>
                                <Link activeClass="active" to={url} /*spy={true}*/smooth={true}>
                                    {name}
                                </Link>
                            </li>
                          </CSSTransition>
                        ))}
                    </TransitionGroup>
                    <TransitionGroup component={null}>
                        {show && (
                          <CSSTransition classNames="fade" timeout={100}>
                            <li key="resume" 
                                className="nav-item" 
                                style={{ transitionDelay: `${navbarLinks.length * 700}ms` }}>
                                <button className="btn-transparent"><a href="#/hero">Resume</a></button>
                            </li>
                          </CSSTransition>
                        )}
                    </TransitionGroup>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;