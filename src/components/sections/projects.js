import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

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

    return (
        <section id="projects" className="jumbotron">
            <h2>Projects</h2>

            { projects && projects.map(({ node }, i) => {
                const { frontmatter, html } = node;
                const { external, title, tech, github, cover } = frontmatter;
                const image = getImage(cover);

                return (
                    <div className="project" key={title}>
                        <div className="project-img">
                            <GatsbyImage image={image} alt={title} className="img" />
                        </div>
                        <div className="card">
                            <div className="project-title">
                                {title}
                            </div>
                            <div className="project-description"
                                 dangerouslySetInnerHTML={{ __html: html }}>
                            </div>
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
                );
            })}
        </section>
    );
};

export default Projects;