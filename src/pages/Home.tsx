import React, { Component } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Papa from 'papaparse'
import moment from 'moment';

export interface IHomeState {
  resultsData: any[];
}

export interface IHomeProps {

}

class Home extends Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps | Readonly<IHomeProps>) {
    super(props);

    this.state = {
      resultsData: []
    }
  }

  componentDidMount() {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSy8kw0haSfwV27PHLvA5JzPXA9VSOvW3dAoavi87-IZA9Jp5BypoJSggDE9fZg9vl99RjW96Wuj2Av/pub?gid=0&single=true&output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        this.setState({
          resultsData: JSON.parse(JSON.stringify(results.data))
        })
      }
    })
  }

  render() {
    return (
      <Container>
      <h1 className='mb-4'>Výsledková listina</h1>
      <Row>
            <Col>
                <h4>Závod na 8 km muži</h4>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Pořadí</th>
                            <th>SČ</th>
                            <th>Jméno</th>
                            <th>Ročník</th>
                            <th>Tým</th>
                            <th>Čas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.resultsData.map((row, key) => {
                            if (row.track === "8 km" && row.cat === "Muž" && row.time && row.time !== "DNS") {
                                return (
                                    <tr key={key}>
                                        <td>{row.place}</td>
                                        <td>{row.startNum}</td>
                                        <td>{row.name}</td>
                                        <td>{moment(row.date, "DD/MM/YYYY").format("YYYY").toString()}</td>
                                        <td>{row.team}</td>
                                        <td>{row.time}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </Table>
            </Col>
            <Col>
                <h4>Závod na 4 km muži</h4>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Pořadí</th>
                            <th>SČ</th>
                            <th>Jméno</th>
                            <th>Ročník</th>
                            <th>Tým</th>
                            <th>Čas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.resultsData.map((row, key) => {
                            if (row.track === "4 km" && row.cat === "Muž" && row.time && row.time !== "DNS") {
                                return (
                                    <tr key={key}>
                                        <td>{row.place}</td>
                                        <td>{row.startNum}</td>
                                        <td>{row.name}</td>
                                        <td>{moment(row.date, "DD/MM/YYYY").format("YYYY").toString()}</td>
                                        <td>{row.team}</td>
                                        <td>{row.time}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </Table>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4>Závod na 8 km ženy</h4>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Pořadí</th>
                            <th>SČ</th>
                            <th>Jméno</th>
                            <th>Ročník</th>
                            <th>Tým</th>
                            <th>Čas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.resultsData.map((row, key) => {
                            if (row.track === "8 km" && row.cat === "Žena" && row.time && row.time !== "DNS") {
                                return (
                                    <tr key={key}>
                                        <td>{row.place}</td>
                                        <td>{row.startNum}</td>
                                        <td>{row.name}</td>
                                        <td>{moment(row.date, "DD/MM/YYYY").format("YYYY").toString()}</td>
                                        <td>{row.team}</td>
                                        <td>{row.time}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </Table>
            </Col>
            <Col>
                <h4>Závod na 4 km ženy</h4>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Pořadí</th>
                            <th>SČ</th>
                            <th>Jméno</th>
                            <th>Ročník</th>
                            <th>Tým</th>
                            <th>Čas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.resultsData.map((row, key) => {
                            if (row.track === "4 km" && row.cat === "Žena" && row.time && row.time !== "DNS") {
                                return (
                                    <tr key={key}>
                                        <td>{row.place}</td>
                                        <td>{row.startNum}</td>
                                        <td>{row.name}</td>
                                        <td>{moment(row.date, "DD/MM/YYYY").format("YYYY").toString()}</td>
                                        <td>{row.team}</td>
                                        <td>{row.time}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
    );
  }
}

export default Home;