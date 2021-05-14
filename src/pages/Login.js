import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const { userInfo, error, loading } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>

      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/redirect"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
