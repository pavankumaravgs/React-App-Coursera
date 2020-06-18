import React from 'react';
import logo from './logo.svg';
import Menu from './components/MenuComponent'
import {Navbar , NavbarBrand} from 'reactstrap';
import './App.css';
import { DISHES } from './shared/dishes';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES,
    };
  }
  render(){
    return (
      <div>
        <Navbar dark color='secondary'>
          <div className='container'>
            <NavbarBrand href='/'>
              Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
  
}

export default App;
