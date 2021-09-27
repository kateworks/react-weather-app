import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import WeatherDisplay from './components/WeatherDisplay';
import { PLACES } from './utils/const';

import 'bootswatch/dist/spacelab/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  
  render() {
    const activePlace = this.state.activePlace;

    return (
      <div className="App">
        <Navbar>
          <Container>
          <Navbar.Brand>
            React Simple Weather App
          </Navbar.Brand>
          </Container>
        </Navbar>

        <Container>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                className="flex-column"
                variant="pills"
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {PLACES.map((place, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index}>
                      {place.name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>

            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
            </Col>
          </Row>
        </Container>     
      </div>
    );
  };
}

export default App;
