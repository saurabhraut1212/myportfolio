import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import notezipper from "../../Assets/Projects/notezipper.png";
import memories from "../../Assets/Projects/memories.png";
import stackoverflow from "../../Assets/Projects/stackoverflow.png";
import yourplaces from "../../Assets/Projects/yourplaces.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={notezipper}
              title="Notezipper"
              description="This is a fully functional website where we can write our notes and store to the database that uses React.js ,Bootstrap and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
              ghLink="https://github.com/saurabhraut1212/notezipper"
              demoLink="https://github.com/saurabhraut1212/notezipper"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={memories}
              title="Stackoverflow clone"
              description="I have developed user-friendly StackOverflow clone, providing a platform for users to ask questions, post answers, and engage in community-driven knowledge sharing.."
              ghLink="https://github.com/saurabhraut1212/stackoverflow-clone"
              demoLink="https://github.com/saurabhraut1212/stackoverflow-clone"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={stackoverflow}
              title="Memories"
              description="Memories is an exciting MERN stack project that enables users to store and share their cherished memories, complete with images. With interactive feature such as liking"
              ghLink="https://github.com/saurabhraut1212/Memories"
              demoLink="https://github.com/saurabhraut1212/Memories"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={yourplaces}
              title="Yourplaces"
              description="Yourplaces is MERN stack project in which you can the places along with image ,location ,etc.It is reach in features such as authentication ,etc.It is user friendly."
              ghLink="https://github.com/saurabhraut1212/Yourplaces"
              demoLink="https://github.com/saurabhraut1212/Yourplaces"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
