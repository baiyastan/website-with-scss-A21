import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function signIn() {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      toast.success("sign in success");
      if (res.user) {
        navigate("/");
      }
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
          <Card.Title>Sign In</Card.Title>
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

            <Button onClick={() => signIn()} variant="primary">
              Login
            </Button>
            <p>
              Don't have an account? <Link to="/register">Sing Up</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
