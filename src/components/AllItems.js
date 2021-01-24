import React, { Component } from 'react'
import Uzglavlje from './Uzglavlje.js'
import AboutItem from './AboutItem.js'
import NavBarAlllItmes from './NavBarAlllItmes.js'
import MenuItem from './MenuItem.js'
import GalleryItem from './GalleryItem.js'
import ContactItem from './ContactItem';


export default class AllItems extends Component {
    render() {
        return (
            <div>
      <Uzglavlje />
      <NavBarAlllItmes />
      <AboutItem  />
      <MenuItem />
      <GalleryItem />
      <ContactItem />
                
            </div>
        )
    }
}
