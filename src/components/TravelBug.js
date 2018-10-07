import React, { Component } from 'react'
import './TravelBug.css'
import Wishlist from './Wishlist/Wishlist';
import HotelList from './HotelList/HotelList';
// import Menu from './Menu/Menu';
import { Menu, Segment } from 'semantic-ui-react'

import Homepage from './Homepage/Homepage';

class TravelBug extends Component {
  state = {
    activeItem: 'Homepage'
  }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    
    console.log('What is the active item', this.state.activeItem)
    return (
      <div>
        <div className='menu'>
          <Menu pointing secondary>
            <Menu.Item
              name='HotelList'
              active={this.state.activeItem === 'HotelList'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Homepage'
              active={this.state.activeItem === 'Homepage'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Wishlist'
              active={this.state.activeItem === 'Wishlist'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Auth'
              active={this.state.activeItem === 'Auth'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>   
        <div>
          <HotelList display={this.state.activeItem == "HotelList" ? true : false}/>
        </div>
        <div>
          <Wishlist display={this.state.activeItem == "Wishlist" ? true : false}/>
        </div>
        <div>
          <Homepage display={this.state.activeItem == "Homepage" ? true : false}/>
        </div>
      </div>
    )
  }
}

export default TravelBug
