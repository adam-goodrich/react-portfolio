import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import emailjs from "emailjs-com";
import "animate.css/animate.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const serviceId = "service_ix1jruj";
    const templateId = "template_7sq8dfj";
    const userId = "6YEakNTL9hYSbIkxL";
    const templateParams = {
      name,
      email,
      message,
    };

    if (form.checkValidity() === true) {
      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    }
  };

  return (
    <div className="contact-body">
      <Container>
        <Card className="contact-card animate__animated animate__fadeIn">
          <Card.Body>
            <Card.Title className="card-title">Contact Me</Card.Title>
            <Form
              id="contact-form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}>
              <Form.Group controlId="validationCustom01">
                <Form.Label className="form-label">Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="validationCustom02">
                <Form.Label className="form-label">Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="validationCustom03">
                <Form.Label className="form-label">Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Please send me a message!"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" id="submit-btn">
                Send Message
              </Button>
              <div className={emailSent ? "visible sent-span" : "invisible"}>
                <p className="sent-message">
                  Thank you for your message, I will be in touch soon!
                </p>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Contact;
