import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import AuthFormWrapper from "../../../components/AuthFormWrapper/AuthFormWrapper";
import classes from "./Register.module.scss";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <AuthFormWrapper>
        <Form noValidate onSubmit={(event) => this.handleFormSubmit(event)}>
          <Form.Group controlId="formUsername">
            <Form.Label className={classes.FormLabel}>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className={classes.FormLabel}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
            {/* <Form.Text className="text-muted">Show some error</Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label className={classes.FormLabel}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className={classes.FormBottomLinkWrapper}>
            <Container fluid>
              <Row>
                <Col className={[classes.NoPadding, classes.LoginLinkWrapper]}>
                  <Link className={classes.LoginLink} to="/login">
                    {" "}
                    Have an account?{" "}
                  </Link>
                </Col>
                <Col className={classes.NoPadding}>
                  <div className={classes.FormButtonWrapper}>
                    <Button
                      variant="light"
                      type="submit"
                      className={classes.FormButton}
                    >
                      Sign Up
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Form>
      </AuthFormWrapper>
    );
  }
}

export default Register;
