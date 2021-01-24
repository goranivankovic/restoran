import React, { Component } from 'react'

import { Container,Row,Col,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import zacini from '../img/zacini.jpg'

export default class AboutItem extends Component {
    render() {
        const s={
            backgroundAttachment: 'fixed',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${zacini})`



        }
        return (
            <div >
            
        
                <Container className="aboutMainDiv" fluid >
                    <br></br>
                    <br></br> 
                                   
                         
                           
                    <Row className="aboutRed">
                
                        <Col className="col-md-12 col-12"><h3 className="text-center text-dark h3d" id="ab">Love For Food</h3></Col>
                        
                        <Col className="col-md-5 col-10 bg-light text-light aboutTextCon h5" style={s}>
                          
                               
                            Welcome. This is Royal plate. Elegant & sophisticated restaurant template. Royal plate offers different home page layouts with smart and unique design, showcasing beautifully designed elements every restaurant website should have. Smooth animations, fast loading and engaging user experience are just some of the features this template offers.
So, give it a try and dive into a world of royal restaurant websites.





                          


                        </Col>


                    </Row>
                </Container>
                
            </div>
        )
    }
}


