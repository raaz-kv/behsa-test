import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

function App() {
  //Definitions
  const initialNames = ['John', 'Jane', 'Bob', 'Alice', 'Charlie'];
  const [names, setNames] = useState(initialNames);
  const [newName, setNewName] = useState('');

  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setNewName(names[randomIndex]);
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const addName = () => {
    if (newName.trim() !== '') {
      setNames([...names, newName]);
      setNewName('');
    }
  };

  //Start ...
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h3 className="mb-4 text-center">Random Name Generator By Razieh Kaveh</h3>
          <hr></hr>
          <Button variant="primary" onClick={generateRandomName}>
            Click Me To Generate Random Name
          </Button>
          {newName && <p className="mt-3">Random Name From List: {newName}</p>}
        </Col>
      </Row>
      <hr></hr>
      <Row className="mt-4">
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter a new name to add to the list"
            value={newName}
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Button variant="success" onClick={addName}>
            Add New Name
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Names List</h2>
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
