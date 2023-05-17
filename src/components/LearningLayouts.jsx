import React from "react";
import { Col, Container, Input, Label, Row } from "reactstrap";

const LearningLayouts = () => {
  return (
    <div>
      <Container>
        <h1>LearningLayouts</h1>
      </Container>

      <Container>
        <Row>
          <Col xs="12" md="6" className="bg-light border">
            <Row>
              <Col xs="12" className="bg-light border">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" />
              </Col>

              <Col xs="12" className="bg-light border">
                <Label htmlFor="email">email</Label>
                <Input type="text" id="email" />
              </Col>

              <Col xs="6" className="bg-light border">
                <Label htmlFor="password">password</Label>
                <Input type="text" id="password" />
              </Col>

              <Col xs="6" className="bg-light border">
                <Label htmlFor="confirm">confirm</Label>
                <Input type="text" id="confirm" />
              </Col>

              <Col xs="12" className="bg-light border">
                <Label htmlFor="location">location</Label>
                <Input type="text" id="location" />
              </Col>
            </Row>
          </Col>
          <Col xs="12" md="6" className="bg-primary border">
            <Col xs="12" className="bg-primary">
              <Label htmlFor="city">city</Label>
              <Input type="text" id="city" />
            </Col>

            <Col xs="12" className="bg-primary">
              <Label htmlFor="street">street</Label>
              <Input type="text" id="street" />
            </Col>

            <Col xs="12" md="8" className="bg-primary">
              <Input type="submit" />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LearningLayouts;
