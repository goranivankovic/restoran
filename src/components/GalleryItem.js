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
            <div>
             <Container>

               <Row>

            
               
                    <Col className="col-12">
            
                    
                       
                            
                        <Carousel>
  <Carousel.Item>
    <img
      className="slike"
     
      
      src={restoran}
      alt="First slide"
    />
    <Carousel.Caption>
    
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
   className="slike"
  
     src={restoran2}
     alt="Second slide"
    />
    <Carousel.Caption>
      
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  id="ga">
    <img
  
  className="slike"

     src={restoran3}
     alt="Third slide"
     
    />
    <Carousel.Caption>
     
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
   
   className="slike"
   width="200%"

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
           
                
            </div>
        )
    }
}
