import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
        <Form.Control.Feedback type="invalid">
              Please Enter a valid Email.
            </Form.Control.Feedback>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required minLength={8}/>
        <Form.Control.Feedback type="invalid">
              Password must 8 chractors long!
            </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Login</Button>
      <div className="mt-2">
          <span>Dont have acount</span><Link to='/signup'> Sign Up</Link>
        </div>
    </Form>
</div>
  );
}

export default Login;
