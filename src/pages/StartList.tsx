import React, { useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

export default function StartList() {
    useEffect(() => {

    }, [])

    return (
        <Container>
            <h1 className='mb-4'>Startovní listina</h1>

            <Row>
                <Col>
                    <h4>Závod na 8 km</h4>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Jméno</th>
                                <th>Ročník</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Vilém Kláda</td>
                                <td>1999</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Rob Banks</td>
                                <td>1987</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Kamil Máslo</td>
                                <td>2002</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <h4>Závod na 4 km</h4>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Jméno</th>
                                <th>Ročník</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Vilém Kláda</td>
                                <td>1999</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Rob Banks</td>
                                <td>1987</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Kamil Máslo</td>
                                <td>2002</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
