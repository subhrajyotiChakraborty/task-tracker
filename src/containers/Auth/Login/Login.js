import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import AuthFormWrapper from "../../../components/AuthFormWrapper/AuthFormWrapper";
import { checkEmailValidation } from "../../../utils/utils";
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
    // this.props.history.push("/dashboard");
    console.log(this.state);
    // toast.error("Hi", {
    //   onOpen: (props) => console.log(props.foo),
    //   onClose: (props) => console.log(props.foo),
    //   autoClose: 6000,
    //   type: toast.TYPE.ERROR,
    //   hideProgressBar: false,
    //   position: toast.POSITION.TOP_LEFT,
    //   pauseOnHover: true,
    //   progress: 0.2,
    // });
  };

  handleInputChange = (event, type) => {
    console.log(checkEmailValidation(event.target.value.trim()));
    this.setState({
      [type]: event.target.value.trim(),
      emailError:
        type === "email"
          ? !checkEmailValidation(event.target.value.trim())
          : this.state.emailError,
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
              className={
                this.state.emailError && this.state.email.length
                  ? classes.EmailError
                  : null
              }
              onChange={(event) => this.handleInputChange(event, "email")}
            />
            {/* <Form.Text className="text-muted">Show some error</Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label className={classes.FormLabel}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
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
                    {/* <ToastContainer /> */}
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
