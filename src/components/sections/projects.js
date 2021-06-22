import React from 'react';
import Portrait from '../../images/portrait1.png'

const Projects = () => {

  return (
    <section id="projects" className="jumbotron">
        <h2>Projects</h2>
        <div className="row">
            <div className="column">
                <div className="card">
                    <img src={Portrait} alt="Avatar" style={{"width": "100%"}} />
                    <div className="container">
                        <h4><b>Project Name</b></h4>
                        <p>project description</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src={Portrait} alt="Avatar" style={{"width": "100%"}} />
                    <div className="container">
                        <h4><b>Project Name</b></h4>
                        <p>project description</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src={Portrait} alt="Avatar" style={{"width": "100%"}} />
                    <div className="container">
                        <h4><b>Project Name</b></h4>
                        <p>project description</p>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  );
};

export default Projects;