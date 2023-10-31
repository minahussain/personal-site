import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Layout from "./layout";

const Portfolio = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true);
        }, 200);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const data = useStaticQuery(graphql`
        {
            projects: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/projects/" } }
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            cover {
                                childImageSharp {
                                    gatsbyImageData(
                                        width: 450
                                        placeholder: BLURRED
                                        formats: [AUTO, WEBP, AVIF]
                                    )
                                }
                            }
                            tech
                            github
                            external
                            showInProjects
                            showImage
                        }
                        html
                    }
                }
            }
        }
    `);

    const projects = data.projects.edges.filter(({ node }) => node);

    const formattedProject = (node) => {
        const { frontmatter, html } = node;
        const {
            external,
            title,
            tech,
            github,
            cover,
            showInProjects,
            showImage,
        } = frontmatter;
        const image = getImage(cover);

        if (!showInProjects) {
            return null;
        }

        return (
            <div className="project" key={title}>
                {showImage ? (
                    <div className="img-card">
                        <div className="img-layer-one" />
                        <div className="img-layer-two" />
                        <div className="project-img">
                            <GatsbyImage
                                image={image}
                                alt={title}
                                className="img"
                            />
                        </div>
                    </div>
                ) : null}
                <div className="prj-card">
                    <div className="project-title">
                        <h3>{title}</h3>
                    </div>
                    <div
                        className="project-description"
                        dangerouslySetInnerHTML={{ __html: html }}
                    ></div>
                    <div className="prj-footer">
                        <div className="project-tech">
                            {tech.length && (
                                <ul>
                                    {tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="project-links">
                            {github && (
                                <a href={github} aria-label="GitHub Link">
                                    <FaGithub size={30} />
                                </a>
                            )}{" "}
                            {external && (
                                <a
                                    href={external}
                                    aria-label="External Link"
                                    className="external"
                                >
                                    <FaExternalLinkAlt size={30} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Layout>
            <section id="projects" className="jumbotron">
                <h2>Projects</h2>
                <TransitionGroup component={null}>
                    {show && projects && (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                            }}
                        >
                            {projects.map(({ node }, i) => {
                                const project = formattedProject(node);
                                if (!project) return null;
                                return (
                                    <CSSTransition
                                        key={`project-transition-${i}`}
                                        classNames="fade"
                                        timeout={300}
                                    >
                                        <div
                                            key={`project-${i}`}
                                            className="project"
                                            style={{
                                                transitionDelay: `${i * 7}00ms`,
                                            }}
                                        >
                                            {project}
                                        </div>
                                    </CSSTransition>
                                );
                            })}{" "}
                        </div>
                    )}
                </TransitionGroup>
            </section>
        </Layout>
    );
};

export default Portfolio;
