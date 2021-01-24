import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import AllItems from './components/AllItems';
import AboutItem from './components/AboutItem.js'



function App() {
  return (
    <BrowserRouter>
 
    <div className="App">
      <Switch>
        <Route exact path ="/" component={AllItems} />
    
        <Route exact path ="*" component={()=>{
          return <h4>404 Not Found</h4>
        }} />

 
     
     </Switch>
    </div>
       </BrowserRouter>
  );
}

export default App;
