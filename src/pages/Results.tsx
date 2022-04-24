import React, { Component } from 'react';
import Papa from 'papaparse';
import moment from 'moment';
import { Container, Row, Col, Table, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export interface IResultsState {
    rawAPIData: any[];
    resultsData: any[];
}

export interface IResultsProps {
    season?: string;
}

var filterTrack = "";
var filterCategory = "cp";

export default class Results extends Component<IResultsProps, IResultsState> {
    constructor(props: IResultsProps | Readonly<IResultsProps>) {
        super(props);
    
        this.state = {
            rawAPIData: [],
            resultsData: []
        }

        this.filterData = this.filterData.bind(this);
    }

    componentDidMount() {
        if (this.props.season) {
            fetch("https://raw.githubusercontent.com/lukas-podolak/e8-history-data/main/" + this.props.season + "/e8-results.json")
            .then(response => response.json())
            .then((jsonData) => {
                this.setState({ resultsData: jsonData, rawAPIData: jsonData });
            })
            .catch((error) => {
                console.error(error);
            });
        } else {
            fetch("https://raw.githubusercontent.com/lukas-podolak/e8-history-data/main/2022/e8-results.json")
            .then(response => response.json())
            .then((jsonData) => {
                this.setState({ resultsData: jsonData, rawAPIData: jsonData });
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }

    public render() {
        return (
            <Container>
            <h1 className='mb-4'>Výsledková listina</h1>

            <Nav variant="tabs" defaultActiveKey={"2022"}>
              <Nav.Item>
                <Nav.Link eventKey="2022"><Link className='resultTabLink' to={'/results/2022'}>2022</Link></Nav.Link>
              </Nav.Item>
            </Nav>

            <div className='resultsTab'>
                <Nav variant="pills" className='mb-3'>
                    <Nav.Item>
                        <Nav.Link eventKey="8km" onClick={() => {filterTrack = "8 km"; this.filterData();}}>8 km</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="4km" onClick={() => {filterTrack = "4 km"; this.filterData();}}>4 km</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav variant="pills" defaultActiveKey="cp" className='mb-3'>
                    <Nav.Item>
                        <Nav.Link eventKey="cp" onClick={() => {filterCategory = "cp"; this.filterData();}}>Celkové pořadí</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="male" onClick={() => {filterCategory = "male"; this.filterData();}}>Muž</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="female" onClick={() => {filterCategory = "female"; this.filterData();}}>Žena</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="mu18" onClick={() => {filterCategory = "MU18"; this.filterData();}}>MU18</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="mu39" onClick={() => {filterCategory = "MU39"; this.filterData();}}>MU39</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="mu40+" onClick={() => {filterCategory = "MU40+"; this.filterData();}}>MU40+</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="fu18" onClick={() => {filterCategory = "FU18"; this.filterData();}}>FU18</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="fu39" onClick={() => {filterCategory = "FU39"; this.filterData();}}>FU39</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="fu40+" onClick={() => {filterCategory = "FU40+"; this.filterData();}}>FU40+</Nav.Link>
                    </Nav.Item>
                </Nav>

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
                            return (
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{row.startNum}</td>
                                    <td>{row.name}</td>
                                    <td>{moment(row.date, "MM/DD/YYYY").format("YYYY").toString()}</td>
                                    <td>{row.team}</td>
                                    <td>{row.time}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
          </Container>
        )
    }

    filterData() {
        const track = filterTrack;
        const category = filterCategory;
        var data = this.state.rawAPIData;

        data = data.filter((item) => item.track.includes(track))
        if (category !== "cp") {
            switch (category) {
                case "male":
                    data = data.filter((item) => item.kategorie.includes("M"));
                    break;
                case "female":
                    data = data.filter((item) => item.kategorie.includes("F"));
                    break;
                default:
                    data = data.filter((item) => item.kategorie.includes(category));
                    break;
            }
        }

        data.sort(function(a, b){
            if(a.time < b.time) { return -1; }
            if(a.time > b.time) { return 1; }
            return 0;
        });

        this.setState({ resultsData: data });
    }
}
