import React, { Component } from 'react'
import './TravelBug.css'
import Wishlist from './Wishlist/Wishlist';
import HotelList from './HotelList/HotelList';
// import Menu from './Menu/Menu';
import { Menu } from 'semantic-ui-react'

import Homepage from './Homepage/Homepage';

class TravelBug extends Component {
  state = {
    activeItem: 'Home'
  }
  
  handleItemClick = (name) => this.setState({ activeItem: name })

  render () {
    
    console.log('What is the active item', this.state.activeItem)
    return (
      <div>
        <div className='menu'>
          <Menu pointing secondary>
            <Menu.Item
              className="menu-home"
              style={{marginRight: "22%", color: "white"}}
              name="Home"
              active={this.state.activeItem === 'Home'}
              onClick={() => this.handleItemClick('Home')}
            />
            <Menu.Item
              className="menu-hotels-list"
              style={{marginRight: "22%", color: "white"}}
              name="Explore"
              active={this.state.activeItem === 'Explore'}
              onClick={() => this.handleItemClick('Explore')}
            />
            <Menu.Item
              className="menu-wishlist"
              style={{marginRight: "22%", color: "white"}}
              name="Wishlist"
              active={this.state.activeItem === 'Wishlist'}
              onClick={() => this.handleItemClick('Wishlist')}
            />
            <Menu.Item
              className="menu-sign-in"
              style={{marginRight: "22%", color: "white"}}
              name="Sign In"
              active={this.state.activeItem === 'Auth'}
              onClick={() => this.handleItemClick('Auth')}
            />
          </Menu>
        </div>  
        <div className="travel-bug">
          TRAVEL BUG
        </div> 
        <div>
          <HotelList display={this.state.activeItem === "Explore" ? true : false}/>
        </div>
        <div>
          <Wishlist display={this.state.activeItem === "Wishlist" ? true : false}/>
        </div>
        <div>
          <Homepage display={this.state.activeItem === "Home" ? true : false}/>
        </div>
      </div>
    )
  }
}

export default TravelBug
