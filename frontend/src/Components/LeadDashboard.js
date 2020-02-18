import React from 'react';
import { Container, ListGroup, ListGroupItem, ListGroupItemHeading, Col, Row } from 'reactstrap'
import ModalConductor from './Conductors/ModalConductor'



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
                                            <ModalConductor status='New' labelText="LMS System" />
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='New' labelText="E-Learning App" />
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='New' labelText="Marketplace" />
                                        </ListGroupItem>
                                    </ListGroup>
                                </Col>

                                <Col sm="3">
                                    <ListGroup className="Lead-dashboard-list">
                                        <ListGroupItem color="info">
                                            <ListGroupItemHeading >
                                                Accepted
                                            </ListGroupItemHeading>
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='Accepted' labelText="LMS System" />
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='Accepted' labelText="E-Learning App" />
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='Accepted' labelText="Marketplace" />
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
                                            <ModalConductor status='Pitched' labelText="LMS System" />
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='Pitched' labelText="E-Learning App" />
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='Pitched' labelText="Marketplace" />
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
                                            <ModalConductor status='ResponseGenerated' labelText="LMS System" />
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='ResponseGenerated' labelText="E-Learning App" />
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='ResponseGenerated' labelText="Marketplace" />
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