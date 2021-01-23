import React, { Component } from 'react'
import { Container,Row,Col,Navbar,Carousel} from 'react-bootstrap';
import restoran from '../img/restoran.jpg'
import restoran2 from '../img/restoran2.jpg'
import restoran3 from '../img/restoran3.jpg'
import dinner from '../img/dinner.jpg'
import restoran4 from '../img/restoran4.jpg'

export default class GalleryItem extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className="galerItemBackground">
                <Container className="galeryMainDiv">
                    <Row>
                        <Col className="col-md-12 col-12">
                            <br></br>
                            
                        <Carousel>
  <Carousel.Item interval={1200}>
    <img
      
      height={"190%"}
      width={"100%"}
      src={restoran}
      alt="First slide"
    />
    <Carousel.Caption>
    
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1200}>
    <img
    
     height={"100%"}
     width={"100%"}
     src={restoran2}
     alt="Second slide"
    />
    <Carousel.Caption>
      
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1200}>
    <img
  
     height={"100%"}
     width={"100%"}
     src={restoran3}
     alt="Third slide"
     
    />
    <Carousel.Caption>
     
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1200}>
    <img
   
     height={"100%"}
     width={"100%"}
     src={dinner}
     alt="Four slide"
     
    />
    <Carousel.Caption>
 
     
    </Carousel.Caption>
  </Carousel.Item>
  



</Carousel>
                        
                        
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>
                
            </div>
        )
    }
}
