import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import styled from "styled-components";
import { navbarLinks } from "@config";

const StyledLink = styled(Link)`
  color: $white-color;
  font-size: $tiny-font-size;
  border-bottom: 0px;
  cursor: pointer;
  text-decoration: none;
  ":hover": {
    color: $white-color;
    border-bottom: 1px solid $white-color;
  }
`;

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <Helmet>
        <body className={navbarOpen ? "noscroll" : ""} />
      </Helmet>
      <nav className={`nav ${navbarOpen ? "showMenu" : ""}`} id="navbar">
        <div className={`nav-menu ${navbarOpen ? "showMenu" : ""}`}>
          <button className="hamburger-button" onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose
                style={{ color: "#fff", width: "40px", height: "40px" }}
              />
            ) : (
              <FiMenu
                style={{ color: "#fff", width: "40px", height: "40px" }}
              />
            )}
          </button>

          <ul className={`nav-content ${navbarOpen ? " showMenu" : ""}`}>
            <TransitionGroup component={null}>
              {show &&
                navbarLinks.map(({ name, url }, i) => (
                  <CSSTransition key={i} classNames="fade" timeout={300}>
                    <li
                      key={i}
                      className="nav-item"
                      style={{ transitionDelay: `${i * 7}00ms` }}
                    >
                      <StyledLink
                        activeClass="active"
                        to={url}
                        smooth={true}
                        onClick={() => closeMenu()}
                      >
                        {name}
                      </StyledLink>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
            <TransitionGroup component={null}>
              {show && (
                <CSSTransition classNames="fade" timeout={300}>
                  <li
                    key="resume"
                    className="nav-button nav-item"
                    style={{ transitionDelay: `${navbarLinks.length * 7}00ms` }}
                  >
                    <button>
                      <a
                        target="_blank"
                        href="https://docs.google.com/document/d/1atU25OJSsVtxRj9Xujr6Oiwbo9FLVaziiMSvLHd0y6g/edit?usp=sharing"
                      >
                        Resume
                      </a>
                    </button>
                  </li>
                </CSSTransition>
              )}
            </TransitionGroup>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
