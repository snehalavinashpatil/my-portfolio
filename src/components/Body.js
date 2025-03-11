import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import profile from '././Utils/profile.jpg'; 

const Body = () => {
  return (
    <Container className="mt-3">
      {/* Profile Section */}
      <Row className="text-center mb-4">
        <Col>
          <img
            src={profile}
            style={{ width: '300px', height: '280px', borderRadius: '8px' }}
            alt="Profile"
            className="img-fluid"
          />
          <h2 className="mt-3">Snehal Chetas Patil</h2>
          <p className="text-muted">UI Developer | JavaScript | TypeScript</p>
        </Col>
      </Row>

      <section className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">
                Experienced front-end developer specializing in React, Angular, and TypeScript.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-15">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Skills</h5>
              <p className="card-text">
                React, Angular, JavaScript, TypeScript, Bootstrap, Tailwind CSS,Node JS
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Contact</h5>
              <p className="card-text">
                📧 snehalohio@gmail.com <br />
                📍 Columbus, OH
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <Row className="mt-3">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>A responsive React application with AWS Lambda.</Card.Text>
              <Button variant="primary" href="#">View Project</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>Angular Daily Use Code Scenario.</Card.Text>
              <Button variant="primary" href="#">View Project</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>GraphQL.</Card.Text>
              <Button variant="primary" href="#">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <footer className="text-center mt-4">
        <p className="text-muted">&copy; 2025 Snehal Patil. All Rights Reserved.</p>
      </footer>
    </Container>
  );
};

export default Body;
