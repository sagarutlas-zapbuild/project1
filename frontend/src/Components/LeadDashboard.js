import React from 'react';
import { Container, Label, ListGroup, ListGroupItem, ListGroupItemHeading, Col, Row } from 'reactstrap'
import NewModal from './Modals/NewModal'; 


const handlechange = () => {
    return(
        NewModal())
}
class Dashboard extends React.Component {

    
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