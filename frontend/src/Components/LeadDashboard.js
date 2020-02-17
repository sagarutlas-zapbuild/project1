import React from 'react';
import { Container, Label, ListGroup, ListGroupItem, ListGroupItemHeading, Col, Row } from 'reactstrap'
import NewPopup from './Popups/new'; 


const handlechange = () => {
    return(
        NewPopup())
}
class Dashboard extends React.Component {

    
    render() {
        return (
            <Container fluid={true} className="Full-screen">
                <Row>
                    <Col className="Sidebar" sm="1">
                        For Sidebar
                </Col>
<<<<<<< HEAD
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
=======
                    <Col sm="11">
                        <Container className="List-container">

                            <h2>Lead Dashboard </h2>
                            <Row>
                                <Col sm="3">
                                    <ListGroup className="Lead-dashboard-list">
                                        <ListGroupItem color="info">

                                            <ListGroupItemHeading >
                                                New
>>>>>>> 8c9a3632fc0cecb38edacc64657c498aa7e26e04
                            </ListGroupItemHeading>
                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">LMS System</Label>
                                            <input type="radio" name="new" onChange={handlechange.bind(this)}></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">E-Learning App</Label>
                                            <input type="radio" name="new"></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">Marketplace</Label>
                                            <input type="radio" name="new"></input>

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
                                            <input type="radio" name="Accepted"></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">E-Learning</Label>
                                            <input type="radio" name="Accepted"></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">Marketplace</Label>
                                            <input type="radio" name="Accepted"></input>

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
                                            <input type="radio" name="Pitched"></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">E-Learning</Label>
                                            <input type="radio" name="Pitched"></input>

                                        </ListGroupItem>
                                        <ListGroupItem action>

                                            <Label className="Radio-label">Marketplace</Label>
                                            <input type="radio" name="Pitched"></input>

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