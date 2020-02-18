import React from 'react';
import { Container, Label, ListGroup, ListGroupItem, ListGroupItemHeading, Col, Row } from 'reactstrap'
import ModalExample from './Modals/ModalExample';



class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
    }

    state = {
        showModal: false
    }

    showModal() {
        console.log("showModal Called");
        this.setState({
            showModal: true,
        });
        
    }

    render() {
        return (
            <Container fluid={true} className="Full-screen">
                <Row>
                    <Col className="Sidebar" sm="1">
                        For Sidebar
                </Col>
                    <Col sm="11">
                        <Container className="List-container">

                            <h2>Lead Dashboard </h2>
                            <Row>
                                <Col sm="3">
                                    <ListGroup className="Lead-dashboard-list">
                                        <ListGroupItem color="info">

                                            <ListGroupItemHeading >
                                                New
                                            </ListGroupItemHeading>
                                        </ListGroupItem>
                                        <ListGroupItem action>
                                        <ModalExample showModal={this.state.showModal} />

                                    

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">E-Learning App</Label>
                                            <input type="radio" name="new" id="e-learning_app_new"></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">Marketplace</Label>
                                            <input type="radio" name="new" id="marketplace_new"></input>

                                        </ListGroupItem>
                                    </ListGroup>
                                </Col>
                                <Col sm="3">
                                    <ListGroup className="Lead-dashboard-list">
                                        <ListGroupItem color="info">

                                            <ListGroupItemHeading >
                                                Accepted
                                            </ListGroupItemHeading>   </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">LMS System</Label>
                                            <input type="radio" name="Accepted" id="lms_system_accepted"></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">E-Learning</Label>
                                            <input type="radio" name="Accepted" id="e-learning_accepted"></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">Marketplace</Label>
                                            <input type="radio" name="Accepted" id="marketplace_accepted" ></input>

                                        </ListGroupItem>
                                    </ListGroup>

                                </Col>
                                <Col sm="3">



                                    <ListGroup className="Lead-dashboard-list">
                                        <ListGroupItem color="info">

                                            <ListGroupItemHeading >
                                                Pitched
                            </ListGroupItemHeading>   </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">LMS System</Label>
                                            <input type="radio" name="Pitched" id="lms_system_pitched"></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">E-Learning</Label>
                                            <input type="radio" name="Pitched" id="e-learning_pitched"></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">Marketplace</Label>
                                            <input type="radio" name="Pitched" id="marketplace_pitched"></input>

                                        </ListGroupItem>
                                    </ListGroup>
                                </Col>
                                <Col sm="3">
                                    <ListGroup className="Lead-dashboard-list">
                                        <ListGroupItem color="info">

                                            <ListGroupItemHeading >
                                                Response Generated
                            </ListGroupItemHeading>   </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">LMS System</Label>
                                            <input type="radio" name="Response Generated"></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">E-Learning</Label>
                                            <input type="radio" name="Response Generated"></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">Marketplace</Label>
                                            <input type="radio" name="Response Generated"></input>

                                        </ListGroupItem>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>

                
            </Container>
        )
    }
}


export default Dashboard