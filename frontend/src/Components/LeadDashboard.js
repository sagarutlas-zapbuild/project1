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
                                <input type="radio" name="new" id="lms_system_1"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    E-Learning App
                                <input type="radio" name="new" id="e-Learning_app_1"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    Marketplace
                                <input type="radio" name="new" id="marketplace_1"></input>
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
                                <input type="radio" name="Accepted" id="lms_system_2"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    E-Learning App
                                <input type="radio" name="Accepted" id="e-Learning_app_2"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    Marketplace
                                <input type="radio" name="Accepted" id="marketplace_2"></input>
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
                                <input type="radio" name="Pitched" id="lms_system_3"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    E-Learning App
                                <input type="radio" name="Pitched" id="e-Learning_app_2"></input>
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Label>
                                    Marketplace
                                <input type="radio" name="Pitched" id="marketplace_3"></input>
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