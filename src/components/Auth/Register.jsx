import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      toast.success("account created success");
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div>
      <Card style={{ width: "20rem", margin: "0 auto", marginTop: "50px" }}>
        <Card.Body>
          <Card.Title>Sign Up</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
              />
            </Form.Group>

            <Button onClick={() => signUp()} variant="primary">
              Sign Up
            </Button>
            <p>
              Have an account? <Link to="/login">Log in</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;
