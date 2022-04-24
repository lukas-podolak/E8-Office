import React, { Component } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
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
            </Container>
        );
    }
}

export default Home;