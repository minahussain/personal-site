import React from 'react';
import Portrait from '../../images/portrait1.png'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
      markdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        html
        frontmatter {
            date
            title
            cover
            github
            external
            tech
            showInProjects
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
                    <div className="project">
                        <div className="project-img">
                            <img src={Portrait} alt="Avatar" style={{"width": "100%"}} />
                            //<GatsbyImage image={image} alt={title} className="img" />
                        </div>
                        <div className="card">
                            <div className="project-title">
                                {title}
                            </div>
                            <div className="project-description"
                                 dangerouslySetInnerHTML={{ __html: html }}>
                            </div>
                            {tech.length && (
                            <ul className="project-tech">
                                {tech.map((tech, i) => (
                                <li key={i}>{tech}</li>
                                ))}
                            </ul>
                            )}
                            <div className="project-links">
                                {github && (
                                    <a href={github} aria-label="GitHub Link">
                                    <FaGithub />
                                    </a>
                                )}
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