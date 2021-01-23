import React, { Component } from 'react'
import { Container,Row,Col,Navbar,Form,Button} from 'react-bootstrap';
import dinner from '../img/dinner.jpg'

export default class ContactItem extends Component {
    render() {
        return (
            <div className="contactMainDiv">
                <br></br>
                <br></br>
                <br></br>
              
                <Container>

                    <Row>
                        <Col className="col-12"><h3 className="text-center text-warning h3d"> CONTACT US TODAY</h3></Col>
                        <br></br>
                        <br></br>
                       <Col className="col-md-6 col-12">
                           <h3 className="text-primary h3d">Royal Food</h3>
                           <img src={dinner} height={"90%"} width={"100%"}   className="slika"/>
                            </Col>
                        <Col className="col-md-6 col-12">
                        <br></br>
                        <br></br>
                 <br></br>
                        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
 
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Lastname</Form.Label>
    <Form.Control type="text" placeholder="Enter lastname" />
 
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Send
  </Button>
</Form>
                        
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>
  

                
            </div>
        )
    }
}
