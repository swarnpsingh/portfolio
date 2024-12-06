import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import password from "../../Assets/Projects/password.png";
import muwci from "../../Assets/Projects/muwci.png";
import image from "../../Assets/Projects/image.png";
import login from "../../Assets/Projects/login.png";
import leeds from "../../Assets/Projects/leeds.png";
import quiz from "../../Assets/Projects/quiz.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muwci}
              isBlog={false}
              title="Password Generator"
              description="Password Generator web tool to generate random passwords. Length of the password is given by the user, the tool also gives an option to keep or not keep numbers and characters."
              ghLink="https://github.com/swarnpsingh/MUWCI-RoomScout"
              demoLink="https://roomscout.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Password Generator"
              description="Password Generator web tool to generate random passwords. Length of the password is given by the user, the tool also gives an option to keep or not keep numbers and characters."
              ghLink="https://github.com/swarnpsingh/password-generator"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Real Time Currency Convertor"
              description="This web tool uses an online API to convert from one currency to another. The relative currency rates changes in real time. The user gets an option to select from all possible currencies."
              ghLink="https://github.com/swarnpsingh/currency-convertor"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="Login/Signup with Authentication"
              description="A login and sign up page which also displays the registered users and changes dynamically upon every sign up. The web app also gives the user an option to change their password."
              ghLink="https://github.com/swarnpsingh/login-signup-auth"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leeds}
              isBlog={false}
              title="Leeds Tracker Chrome Extension"
              description="It is a chrome extension which enables users to instantly jot in recent leeds and delete them if the job is done. It is more of an instant use tool, with lesser relevance."
              ghLink="https://github.com/swarnpsingh/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description="A basic quiz app which displays questions, inputs user selection and display if the answer was correct or not and the final quiz score."
              ghLink="https://github.com/swarnpsingh/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
