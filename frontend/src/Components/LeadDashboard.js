import React from 'react';
import { Container, Label, ListGroup, ListGroupItem, ListGroupItemHeading, Col, Row } from 'reactstrap'

function LeadDashboard() {
    return (

        <Container>
            <Row>
                <Col className="Sidebar" sm="1">
                    For Sidebar
                </Col>
                <Col sm="11">
                    <p className="Custom-heading">
                        Lead Dashboard
                    </p>
                    <Row>
                        
                        <ListGroup className="Lead-dashboard-list">
                            <ListGroupItemHeading>
                                New
                            </ListGroupItemHeading>
                            <ListGroupItem>
                                <Label>
                                    LMS System
                                <input type="radio" name="new"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    E-Learning App
                                <input type="radio" name="new"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    Marketplace
                                <input type="radio" name="new"></input>
                                </Label>
                            </ListGroupItem>
                        </ListGroup>
                        
                        <ListGroup className="Lead-dashboard-list">
                            <ListGroupItemHeading>
                                Accepted
                            </ListGroupItemHeading>
                            <ListGroupItem>
                                <Label>
                                    LMS System
                                <input type="radio" name="Accepted"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    E-Learning App
                                <input type="radio" name="Accepted"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    Marketplace
                                <input type="radio" name="Accepted"></input>
                                </Label>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup className="Lead-dashboard-list">
                            <ListGroupItemHeading>
                                Pitched
                            </ListGroupItemHeading>
                            <ListGroupItem>
                                <Label>
                                    LMS System
                                <input type="radio" name="Pitched"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    E-Learning App
                                <input type="radio" name="Pitched"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    Marketplace
                                <input type="radio" name="Pitched"></input>
                                </Label>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup className="Lead-dashboard-list">
                            <ListGroupItemHeading>
                                Response Generated
                            </ListGroupItemHeading>
                            <ListGroupItem>
                                <Label>
                                    LMS System
                                <input type="radio" name="Response Generated"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    E-Learning App
                                <input type="radio" name="Response Generated"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    Marketplace
                                <input type="radio" name="Response Generated"></input>
                                </Label>
                            </ListGroupItem>
                        </ListGroup>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default LeadDashboard