import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import AuthFormWrapper from "../../../components/AuthFormWrapper/AuthFormWrapper";
import { checkEmailValidation, showToast } from "../../../utils/utils";
import * as CONSTANTS from "../../../utils/constant";
import classes from "./Login.module.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailError: false,
      email: "",
      password: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (!this.state.password.length && !this.state.email.length) {
      showToast(false, CONSTANTS.EMAIL_PASSWORD_REQUIRED_ERROR);
    } else if (!this.state.password.length || !this.state.email.length) {
      showToast(false, CONSTANTS.EMAIL_PASSWORD_REQUIRED_ERROR);
    } else if (
      this.state.password.length &&
      this.state.email.length &&
      !checkEmailValidation(this.state.email)
    ) {
      showToast(false, CONSTANTS.NOT_VALID_EMAIL_ERROR);
    } else {
      // Perform async task
      console.log(this.state);
      this.props.history.push("/dashboard");
    }
  };

  handleInputChange = (event, type) => {
    this.setState({
      [type]: event.target.value.trim(),
    });
  };

  render() {
    return (
      <AuthFormWrapper>
        <Form noValidate onSubmit={(event) => this.handleFormSubmit(event)}>
          <Form.Group controlId="formEmail">
            <Form.Label className={classes.FormLabel}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={(event) => this.handleInputChange(event, "email")}
            />
            {/* <Form.Text className="text-muted">Show some error</Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label className={classes.FormLabel}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(event) => this.handleInputChange(event, "password")}
            />
          </Form.Group>
          <div className={classes.FormBottomLinkWrapper}>
            <Container fluid>
              <Row>
                <Col className={[classes.NoPadding, classes.SignUpLinkWrapper]}>
                  <Link className={classes.SignUpLink} to="/signup">
                    {" "}
                    Don't have any account?{" "}
                  </Link>
                </Col>
                <Col className={classes.NoPadding}>
                  <div className={classes.FormButtonWrapper}>
                    <Button
                      variant="light"
                      type="submit"
                      className={classes.FormButton}
                    >
                      Login
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

export default Login;
