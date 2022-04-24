import React, { Component } from 'react'
import { Card, Col, Container, ListGroup, Row, Table } from 'react-bootstrap'
import Papa from 'papaparse'
import moment from 'moment';

export interface IHomeState {
}

export interface IHomeProps {

}

class Home extends Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps | Readonly<IHomeProps>) {
        super(props);
        
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card border="dark" className='mb-3'>
                          <Card.Header>Traťový rekord na 8 km</Card.Header>
                          <Card.Body>
                            <Card.Title>25:55.69</Card.Title>
                            <Card.Text>Pavel Kubričan / 23. 4. 2022</Card.Text>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="dark" className='mb-3'>
                          <Card.Header>Traťový rekord na 4 km</Card.Header>
                          <Card.Body>
                            <Card.Title>14:07.84</Card.Title>
                            <Card.Text>Ricardo Goncalves / 23. 4. 2022</Card.Text>
                          </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;