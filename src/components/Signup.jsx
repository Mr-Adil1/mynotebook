import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Signup() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="container p-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" required />
          <Form.Control.Feedback type="invalid">
            Name Required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Control.Feedback type="invalid">
            Please Enter a valid Email.
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            minLength={8}
          />
          <Form.Control.Feedback type="invalid">
            Password must 8 chractors long!
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Signup</Button>
        <div className="mt-2">
          <span>Already have acount</span><Link to='/login'> Login</Link>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
