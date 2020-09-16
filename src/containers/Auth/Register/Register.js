import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import AuthFormWrapper from "../../../components/AuthFormWrapper/AuthFormWrapper";
import { checkEmailValidation, showToast } from "../../../utils/utils";
import * as CONSTANTS from "../../../utils/constant";
import classes from "./Register.module.scss";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;

    if (!name.trim().length && !email.trim().length && !password.length) {
      showToast(false, CONSTANTS.NAME_EMAIL_PASSWORD_REQUIRED_ERROR);
    } else if (
      !name.trim().length ||
      !email.trim().length ||
      !password.length
    ) {
      showToast(false, CONSTANTS.NAME_EMAIL_PASSWORD_REQUIRED_ERROR);
    } else if (
      name.trim().length &&
      email.trim().length &&
      password.length &&
      !checkEmailValidation(this.state.email)
    ) {
      showToast(false, CONSTANTS.NOT_VALID_EMAIL_ERROR);
    } else {
      // Perform async task
      console.log(this.state);
      this.props.history.push("/dashboard");
    }
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: name === "password" ? value.trim() : value,
    });
  };

  render() {
    return (
      <AuthFormWrapper>
        <Form noValidate onSubmit={(event) => this.handleFormSubmit(event)}>
          <Form.Group controlId="formUsername">
            <Form.Label className={classes.FormLabel}>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className={classes.FormLabel}>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            {/* <Form.Text className="text-muted">Show some error</Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label className={classes.FormLabel}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
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
