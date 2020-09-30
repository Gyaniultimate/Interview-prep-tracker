import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import useState from "react";


function App() {
  return (
    <div className="Login">
      <Form>
        <Form.Group controlId="formBasicEmail" >
          
          <Form.Label >Email</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            
           
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            
           
           type="text"
          />
        </Form.Group>
        <Button variant="primary"  type="submit"> {' '}
          Login
        </Button>
      </Form>
    </div>
  );
}
export default App;
