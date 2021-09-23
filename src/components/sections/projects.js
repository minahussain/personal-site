import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Projects = () => {
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
                    gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                  }
                }
                tech
                github
                external
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
        const { external, title, tech, github, cover } = frontmatter;
        const image = getImage(cover);

        return (
            <div className="project" key={title}>
                <div className="img-card">
                    <div className="img-layer-one" />
                    <div className="img-layer-two" />
                    <div className="project-img">
                        <GatsbyImage image={image} alt={title} className="img" />
                    </div>
                </div>
                <div className="prj-card">
                        <div className="project-title">
                            <h3>{title}</h3>
                        </div>
                        <div className="project-description"
                             dangerouslySetInnerHTML={{ __html: html }}>
                        </div>
                    <div className="prj-footer">
                        <div className="project-tech">
                            { tech.length && (
                                <ul>
                                    { tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="project-links">
                            {github && (
                                <a href={github} aria-label="GitHub Link">
                                <FaGithub />
                                </a>
                            )}{" "}
                            {external && (
                                <a href={external} aria-label="External Link" className="external">
                                <FaExternalLinkAlt />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section id="projects" className="jumbotron">
            <h2>Projects</h2>
            { projects &&
                projects.map(({ node }, i) => (
                    formattedProject(node)
            ))}
        </section>
    );
};

export default Projects;