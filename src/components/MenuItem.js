import React, { Component } from 'react'
import { Container,Row,Col,Navbar,Nav,Media} from 'react-bootstrap';
import breakfast from '../img/breakfast.jpg'
import brunch from '../img/brunch.jpg'
import dinner from '../img/dinner.jpg'
import zacini from '../img/zacini.jpg'

export default class MenuItem extends Component {
    constructor(){
        super()
        this.changeScale095=this.changeScale095.bind(this)
        this.changeScale100=this.changeScale100.bind(this)
        this.changeBackground=this.changeBackground.bind(this)
        this.changeColorDefult =this.changeColorDefult.bind(this)
    }
    changeScale095(e){
       e.target.style.transition='1200ms'
        e.target.style.transform='scale(0.90)'
       
    }

    changeScale100(b){
        b.target.style.transition='1200ms'
         b.target.style.transform='scale(1)'
        
     }
     changeBackground(c){
        c.target.style.transition='1200ms'
         c.target.style.backgroundColor='lightblue'
     }
     changeColorDefult(l){
        l.target.style.transition='1200ms'
        l.target.style.backgroundColor='lightslategray'

     }


    render() {
        return (
            <div>
                <Container className="menuMainDiv" fluid>
                <br></br>
                    <br></br> 
                    <br></br>
                 
                    <Row>
                        <Col className="col-md-6 col-12 menu4images">
                            <br></br>
                            

                            <img width={'50%'} height={'45%'} src={breakfast} onMouseOver={this.changeScale095} onMouseOut={this.changeScale100} />
                            <img width={'50%'} height={'45%'} src={dinner} onMouseOver={this.changeScale095}  onMouseOut={this.changeScale100}/>
                            <img width={'50%'} height={'45%'} src={brunch} onMouseOver={this.changeScale095}  onMouseOut={this.changeScale100} />
                            <img width={'50%'} height={'45%'} src={zacini} onMouseOver={this.changeScale095}  onMouseOut={this.changeScale100}/>
                           

                        </Col>
                       
                        

                        <Col className="col-md-6 col-12 m" id="mu">
                            
                            <h3 className="text-center text-primary h3d">SPECIAL OFFERS</h3>
    <Media className="border h-25" onMouseOver={this.changeBackground} >
  <img
    width={80}
    height={80}
    className="mr-3 "
    src={breakfast}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5 className="h4d">Royal Breakfast</h5>
    <p>
    Fried eggs, fried bacon, toast, 
    fresh tomato salad, cup of coffee or tea
      
    </p>
  </Media.Body>

</Media>
<br></br>
<Media className="border h-25" onMouseOver={this.changeBackground}  >
  <img
    width={80}
    height={80}
    className="mr-3"
    src={brunch}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5 className="h4d">Royal Brunch</h5>
    <p>
    Warm chicken wings, portobello mushrooms, fresh mozzarella, coffe or tea
      
    </p>
  </Media.Body>
</Media>
<br></br>
<Media className="border h-25" onMouseOver={this.changeBackground}>
  <img
    width={80}
    height={80}
    className="mr-3"
    src={dinner}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5 className="h4d">Royal Dinner</h5>
    <p>
    Grilled Beaf steak, roasted red potatos with rosemary, mashrooms sause, vine
      
    </p>
  </Media.Body>
</Media>





                      </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
