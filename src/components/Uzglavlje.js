import React, { Component } from 'react'

import { Container,Row,Col,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import {FaBars, FaHeart,FaHome} from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import restoran from '../img/restoran.jpg'
import restoran2 from '../img/restoran2.jpg'
import restoran3 from '../img/restoran3.jpg'
import restoran4 from '../img/restoran4.jpg'
import Anime from 'react-anime'





export default class Uzglavlje  extends Component {
    render() {

    
        return (
            <div className="uzglavljeMainDiv">
                <img  className="slikaClas" src={restoran4} />
              
             
         
                <div className="discoverDiv">
                    <br></br>
             
                <Container className="border h-75"> 
                  <Anime translateX={[1500,0]} duration={4500} delay={700}> 
                    <Row>
                        <Col className="col-12"><h3 className="text-center text-warning h3d">Discover </h3> </Col>
                        <br></br>
             <Col className="col-12"><h3 className="text-center text-white h3d">Royal Food </h3> </Col>      
                        <br></br>
                        <Col className="col-12"><h1 className="text-center text-warning">-----<GiKnifeFork />----- </h1></Col>
                        <Col className="col-12"><h3 className="text-center text-white h3d">OPENING HOURS</h3> </Col>
                        <br></br>
                        <br></br>
                        <br></br>
             <Col className="col-12 text-center"><h4 className="text-black h4d">Monday-Friday: <span className="text-light h3 h3d">08:00 - 23:00 </span> </h4></Col>
                     
                         <Col className="col-12 text-center"><h4 className="text-black h4d">Weekends: <span className="text-light h3 h4d">08:00 - 01:00 </span> </h4></Col>


                     </Row>
                      </Anime>
                    </Container>
                   
               
                     
                     </div>
       

                
            </div>
        )
    }
}
