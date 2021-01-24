import React, { Component } from 'react'
import { Container,Row,Col,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import {FaBars, FaHeart,FaHome} from 'react-icons/fa';
import brunch from '../img/brunch.jpg'
import Media from "react-media"
import Uzglavlje from './Uzglavlje.js'
import AboutItem from './AboutItem.js'
import MenuItem from './MenuItem.js'
import GalleryItem from './GalleryItem.js'
import ContactItem from './ContactItem';
import { Link}  from 'react-router-dom'

export default class NavBarAlllItmes extends Component {
    constructor(){
        super()
       
        this.changeWhNavBar=this.changeWhNavBar.bind(this)
        this.backgorundColorLower768=this.backgorundColorLower768.bind(this)
        this.backgorundColorLower768DefoultColor=this.backgorundColorLower768DefoultColor.bind(this)
        this.getabaout=this.getabaout.bind(this)
      
        this.state={
            laz:false,
           
        }
      
    }


  
          changeWhNavBar(){
              let navic768Lower= document.querySelector('.navic768Lower')
              let navItemsClassLower768 =document.querySelector('.navItemsClassLower768')
          
           
            if(!this.state.laz){
                
              navic768Lower.style.position='fixed';
              navic768Lower.style.top='0%'
              navic768Lower.style.width='100%'
              navic768Lower.style.height='50%'
              navic768Lower.style.zIndex='3000'
              navic768Lower.style.display='flex'

              navItemsClassLower768.style.display='flex';
              navItemsClassLower768.style.flexDirection="column"
              navItemsClassLower768.style.height='100%'
              navItemsClassLower768.style.width='100%'
              navItemsClassLower768.style.alignItems='center';
              navItemsClassLower768.style.justifyContent='space-around';
              navItemsClassLower768.style.fontFamily='Indie Flower, cursive';
             
            
               
                
 

             this.setState({
                 laz:true
             })
 
            
             }else if(this.state.laz){
                 
                navic768Lower.style.display='none'
                 

              
      
               this.setState({
                  laz:false
                      })
             }
           
           
          }

 
         

          backgorundColorLower768(e){
            // e.target.style.width='100%'
            //   e.target.style.backgroundColor='grey';
            //   e.target.style.padding="7px"

          }
          backgorundColorLower768DefoultColor(e){
            // e.target.style.width='100%'
            // e.target.style.backgroundColor='teal';
            // e.target.style.padding="0px"



          }
          getabaout(){
            let navic768Lower= document.querySelector('.navic768Lower')
            navic768Lower.style.display='none'

          
            
            

          }
          
        


    render() {
      
      
       
        return (
          
            <div>
           


                

                                     <Media query={{ maxWidth: 768 }}>
                    {matches =>
                      matches ? (
                          <div>



                          <div className="bars">
                              <FaBars  onClick={this.changeWhNavBar}/>

                          </div>
                          <div className="navic768Lower">
                          <Nav className="navItemsClassLower768">
                                                 <Nav.Link href="#uz" className="text-light text-center h5" onClick={this.getabaout}>Home</Nav.Link>
                                                 <Nav.Link href ="#ab"className="text-light text-center h5 "onClick={this.getabaout} >About</Nav.Link>
                                                 <Nav.Link href ="#mu" className="text-light text-center h5"  onClick={this.getabaout}>Menu</Nav.Link>
                                                 <Nav.Link href ="#ga" className="text-light text-center h5"  onClick={this.getabaout}>Galery</Nav.Link>
                                                 <Nav.Link href ="#con" className="text-light text-center h5" onClick={this.getabaout} >Contact</Nav.Link>
                            
                                                </Nav>


</div>
                     

</div>



                        ) : (

                                     
                            <div className="navic">
                            <div className="royalFood"><h3 className="text-primary h3d navIme">Royal Food</h3> </div>
                                          
                                                <Nav className="navItemsClass">
                                                    <Nav.Link href="#uz" className="text-light h5">Home</Nav.Link>
                                                    <Nav.Link href ="#ab" className="text-light h5">About</Nav.Link>
                                                    <Nav.Link href ="#mu" className="text-light h5">Menu</Nav.Link>
                                                    <Nav.Link href ="#ga" className="text-light h5">Galery</Nav.Link>
                                                    <Nav.Link href ="#con" className="text-light h5">Contact</Nav.Link>
                            
                                                </Nav>
                                    
                                  
         
         
                                              </div>   



                        
                       )
                     }
                   </Media>
                      
                

            </div>


           
        )
    }
}
