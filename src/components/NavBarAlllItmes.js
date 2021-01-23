import React, { Component } from 'react'
import { Container,Row,Col,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import {FaBars, FaHeart,FaHome} from 'react-icons/fa';
import Media from "react-media"
export default class NavBarAlllItmes extends Component {
    constructor(){
        super()
       
        this.changeWhNavBar=this.changeWhNavBar.bind(this)
        this.state={
            laz:false
        }
    }


          changeWhNavBar(){
        //     const  navHwlower768 =document.querySelector('.navHwlower768')
        //     const royalFood2 = document.querySelector('.royalFood2')
        //     const  navic2 =document.querySelector('.navic2')
        //     const bars=document.querySelector('.bars')

        //     if(this.state.laz==false){
        //   bars.style.position='fixed'
        //   bars.style.top='0%';
        //   bars.style.right='20%'
        //   royalFood2.style.display="none"
        //   navic2.style.height='50%';
        //   navic2.style.width='100%'
        //   navic2.style.position='fixed';
        //   navic2.style.top='0%'
        //   navic2.style.left='0%'
        //   navic2.style.backgroundColor="grey"
        //   navHwlower768.style.display='flex';
        //   navHwlower768.style.width='100%'
        //   navHwlower768.style.height='100%'
        //   navHwlower768.style.flexDirection="column"
        //   navHwlower768.style.justifyContent='space-around';
        //   navHwlower768.style.alignItems='center';

        //     this.setState({
        //         laz:true
        //     })
          
        //     }else if(this.state.laz==true){
        //       royalFood2.style.display="block"
        //         navHwlower768.style.display='none';
        //         navic2.style.position='fixed';
        //         navic2.style.height='10%';
        //         navic2.style.width='100%'
        //         navic2.style.backgroundColor="transparent"
        //         navHwlower768.style.display='flex';
        //         navHwlower768.style.width='70%'
        //         navHwlower768.style.height='10%'
        //         navHwlower768.style.justifyContent='space-around';
        //         navHwlower768.style.alignItems='center';
               
           
            

        //  this.setState({
        //      laz:false
        //  })


            // }
         

          

          }




    render() {

   

        return (
          
            <div className="navic">
           


                                     
                 <div className="navic">
                   <div className="royalFood"><h3 className="text-primary h3d navIme">Royal Food</h3> </div>
                                 
                                       <Nav className="navItemsClass">
                                           <Nav.Item className="text-light h5">Home</Nav.Item>
                                           <Nav.Item className="text-light h5">About</Nav.Item>
                                           <Nav.Item className="text-light h5">Menu</Nav.Item>
                                           <Nav.Item className="text-light h5">Galery</Nav.Item>
                                           <Nav.Item className="text-light h5">Contact</Nav.Item>
                   
                                       </Nav>
                           
                         


                                     </div>   
                      
                

            </div>
           
        )
    }
}
