import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";

import classes from "./AuthFormWrapper.module.scss";

const AuthFormWrapper = (props) => {
  return (
    <Container fluid className={classes.AuthFormWrapper}>
      <div className={classes.AppLogo}>
        <FontAwesomeIcon icon={faShapes} size="3x" color="white" />
      </div>
      <Row>
        <Col sm={6} className={classes.PanelForm}>
          <div className={classes.FormWrapper}>{props.children}</div>
        </Col>
        <Col sm={6} className={classes.PanelBg}></Col>
      </Row>
    </Container>
  );
};

export default AuthFormWrapper;
