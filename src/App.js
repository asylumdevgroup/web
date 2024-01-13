import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Modpacks from './Components/Modpacks';

import { Link, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  
  render() {
    return (
    <div className="App" style={{fontFamily: 'Montserrat'}}>
      <Navbar bg="dark" expand="lg">
  <Navbar.Brand><Link to="/"><img
        src="adg.png"
        width="32"
        height="32"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link ><Link to="/about">About</Link></Nav.Link>
      <Nav.Link><Link to="/modpacks">Modpacks</Link></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Routes>
<Route exact path='/' element={<Home/>} />
<Route path='/about' element={<About/>}/>
<Route path='/modpacks' element={<Modpacks/>} />

</Routes>
    </div>
    )
}
}
  
  

export default App;
