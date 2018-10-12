import React, { Component } from 'react'
import './TravelBug.css'
import Wishlist from './Wishlist/Wishlist';
import HotelList from './HotelList/HotelList';
import { Menu } from 'semantic-ui-react'
import Homepage from './Homepage/Homepage';
import SignInPage from './SignInPage/SignInPage';
import API from '../adapters/API'



class TravelBug extends Component {
  state = {
    activeItem: 'Home',
    hotelsInWunderlist: [],
    currentUser: undefined,
  }
  
  handleItemClick = (name) => this.setState({ activeItem: name }, () => window.scrollTo(0,0))


  addToWunderlist = (hotel) => {
    if (this.state.hotelsInWunderlist.includes(hotel)) return;
    API.saveUsersWishlistedHotels(hotel, this.state.currentUser)
    .then(resp => resp.json())
    .then(data => this.setState({
      hotelsInWunderlist: data,
      activeItem: "Wanderlist"
    }))
    
  }

  removeHotelFromWunderlist = selectedHotel => {
    this.setState({
      hotelsInWunderlist: this.state.hotelsInWunderlist.filter(hotel => selectedHotel !== hotel)
    })
  }

  hasHotelBeenAddedToWunderList = hotel => {
    return this.state.hotelsInWunderlist.includes(hotel)
  }

  handleUser = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user))
    this.setState(
      {
        currentUser: {email: user.email, id: user.id}
      },
      () => {
        API.fetchWishlist(this.state.currentUser)
          .then(res => res.json())
          .then(data => this.setState({
            hotelsInWunderlist: data
          }))
      }
    )
  }

  render () {
    return (
      <div>
        <div className='menu'>
          <Menu stackable pointing secondary>
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
              name="Wanderlist"
              active={this.state.activeItem === 'Wanderlist'}
              onClick={() => this.handleItemClick('Wanderlist')}
            />
            <Menu.Item
              className="menu-sign-in"
              style={{marginRight: "22%", color: "white"}}
              name="Sign In"
              active={this.state.activeItem === 'Sign In'}
              onClick={() => this.handleItemClick('Sign In')}
            />
          </Menu>
        </div>  
        <div className="travel-bug">
          TRAVEL BUG
        </div> 
        <div className="travel-title" style={{display: this.state.activeItem !== "Home" ? '' : 'none'}}>
          {this.state.activeItem}
        </div> 
        <div className="background-home">
          <div>
            <HotelList display={this.state.activeItem === "Explore" ? true : false}
              addToWunderlist={this.addToWunderlist}
              removeHotelFromWunderlist={this.removeHotelFromWunderlist}
              hasHotelBeenAddedToWunderList={this.removeHotelFromWunderlist}
              handleUser={this.handleUser} 
            />
          </div>
          <div>
            <Wishlist handleItemClick={this.handleItemClick} display={this.state.activeItem === "Wanderlist" ? true : false}
            hotelsInWunderlist={this.state.hotelsInWunderlist}
            addToWunderlist={this.addToWunderlist}
            removeHotelFromWunderlist={this.removeHotelFromWunderlist}
            hasHotelBeenAddedToWunderList={this.removeHotelFromWunderlist}
            />
          </div>
          <div>
            <Homepage handleItemClick={this.handleItemClick} display={this.state.activeItem === "Home" ? true : false}/>
          </div>
          <div>
            <SignInPage handleUser={this.handleUser} handleItemClick={this.handleItemClick} display={this.state.activeItem === "Sign In" ? true : false}/>
          </div>
        </div>
        <div className="site-footer">
          © Sarah Jacob 2018
        </div>
      </div>
    )
  }
}

export default TravelBug
