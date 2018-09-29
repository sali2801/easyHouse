import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, View, Mask } from 'mdbreact';
import './App.css';
import lodging from './images/lodging.jpg' // relative path to image 

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
       <View>
    <img src={lodging} className="img-fluid" alt=""/>
    <Mask overlay="black-strong" style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
        <h2>This Navbar isn't fixed</h2>
        <h5>When you scroll down it will disappear</h5>
        <br/>
        <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
    </Mask>
  </View>
  <Container className="text-center my-5">
    <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.</p>
   </Container>
   <Footer/>
      </div>
 
    );
  }
}

export default App;
