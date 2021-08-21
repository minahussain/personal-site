import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { socials } from '@config';

const Socials = () => {
    let [show, setShow] = useState(false);

    const socialMap = [<FaInstagram />, <FaGithub />, <FaLinkedin />];

    useEffect(() => {
        const timeout = setTimeout(() => {setShow(true)}, 1000 * 5);
        return () => {clearTimeout(timeout)}
    }, []);

    return (
        <nav className="socials" id="socialsbar">
            <div className="socials-content">
                <ul className="socials-items">
                    <TransitionGroup component={null}>
                      { show && 
                        socials.map(({ key, name, url }, i) => (
                          <CSSTransition key={i} classNames="fade" timeout={1000}>
                            <li key={key} className="socials-item" style={{ transitionDelay: `${i * 10}00ms` }}>
                                <a href={url} aria-label={name}>
                                    {socialMap[i]}
                                </a>
                            </li>
                          </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ul>
            </div>
        </nav>
    );
}

export default Socials;