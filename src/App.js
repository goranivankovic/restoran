import React from 'react';
import './App.css';
import Uzglavlje from './components/Uzglavlje.js'
import AboutItem from './components/AboutItem.js'
import NavBarAlllItmes from './components/NavBarAlllItmes.js'
import MenuItem from './components/MenuItem.js'
import GalleryItem from './components/GalleryItem.js'
import ContactItem from './components/ContactItem';


function App() {
  return (
    <div className="App">
      <Uzglavlje />
      <NavBarAlllItmes />
      <AboutItem />
      <MenuItem />
      <GalleryItem />
      <ContactItem />
     
     
    </div>
  );
}

export default App;
