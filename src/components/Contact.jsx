import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [validated, setValidated] = useState(false);

  const submit = () => {
    // TODO - send mail

    if (nameValid && emailValid && messageValid) {
      setValidated(true);
      setEmailSent(true);
    }

    const serviceId = "service_ix1jruj";
    const templateId = "template_7sq8dfj";
    const userId = "6YEakNTL9hYSbIkxL";
    const templateParams = {
      name,
      email,
      message,
    };

    if (validated) {
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

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <div className="contact-body">
      <Container>
        <Form id="contact-form" validated={validated}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              id="validationCustom01"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="validationCustom02"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              id="validationCustom03"
            />
          </Form.Group>
          <Button onClick={submit}>Send Message</Button>
          <span className={emailSent ? "visible" : "invisible"}>
            Thank you for your message, we will be in touch in no time!
          </span>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
