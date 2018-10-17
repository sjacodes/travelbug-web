import React, { Component } from 'react'
import { Route, Link, withRouter, Switch } from "react-router-dom";
import './TravelBug.css'
import Wishlist from './Wishlist/Wishlist';
import HotelList from './HotelList/HotelList';
import { Menu } from 'semantic-ui-react'
import Homepage from './Homepage/Homepage';
import SignInPage from './SignInPage/SignInPage';
import API from '../adapters/API'




class TravelBug extends Component {
  state = {
    hotelsInWunderlist: [],
    currentUser: window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : undefined,
    noteContent: '',
    timer: undefined
  }
  

  addToWunderlist = (hotel) => {
    console.log(hotel)
    if (this.state.hotelsInWunderlist.map(wlh => wlh.hotel_id).includes(hotel.id)) return;
    API.saveUsersWishlistedHotels(hotel, this.state.currentUser)
    .then(resp => resp.json())
    .then(data => this.setState({
      hotelsInWunderlist: data
        }))
    
  }

  removeHotelFromWunderlist = (selectedHotel) => {
    this.setState({
      hotelsInWunderlist: this.state.hotelsInWunderlist.filter(hotel => selectedHotel !== hotel),
      activeItem: "Wanderlist"
    })
    API.removeUsersWishlistedHotels(selectedHotel, this.state.currentUser)
  }

  changeWishlistItem = (wishlistedHotelId, item, itemIndex) => {
    const wishlistedHotel = this.state.hotelsInWunderlist.find(hotel => hotel.id === wishlistedHotelId)
    const wishlistedHotels = this.state.hotelsInWunderlist
    const wlhIndex = wishlistedHotels.indexOf(wishlistedHotel)
    wishlistedHotel.checklist_items[itemIndex].checked = !wishlistedHotel.checklist_items[itemIndex].checked
    wishlistedHotels[wlhIndex] = wishlistedHotel
    this.setState({
      hotelsInWunderlist: wishlistedHotels
    })
    API.updateWishlistedHotel(wishlistedHotel)
  }

  changeWishlistItemNote = (wishlistedHotelId, note) => {
    this.setState({
      hotelsInWunderlist: this.state.hotelsInWunderlist.map(hotel => {
        if (hotel.id !== wishlistedHotelId) return hotel
        hotel.note = note
        return hotel
      })
    })
    if (this.state.timer != undefined) {
      window.clearTimeout(this.state.timer)
    }
    this.setState({
      timer: window.setTimeout(() => {
        API.updateWishlistedHotel(
          this.state.hotelsInWunderlist.find(hotel => hotel.id === wishlistedHotelId)
        )
      }, 1000)
    })
  }

 
  hasHotelBeenAddedToWunderList = hotel => {
    return this.state.hotelsInWunderlist.map(wlh => wlh.hotel_id).includes(hotel.id)
  }

  handleUser = (user) => {
    console.log(user)
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

  logoutUser = () => {
    this.setState({currentUser: undefined, hotelsInWunderlist: []})
    window.localStorage.removeItem('user')
  }

  activeItem = () => {
    return {
      '/': "HOME",
      '/explore': "EXPLORE",
      '/wanderlist': "WANDERLIST",
      '/myaccount': "SIGN IN",
    }[this.props.location.pathname]
  }

  render () {
    return (
    <div>
      <div style={{minHeight: 'calc(100vh - 75px)'}}>
        <div className='menu'>
          <Menu stackable pointing secondary>
              <Menu.Item
                  as={Link}
                  to='/'
                  className="menu-option"
                  name="Home"
                  active={this.activeItem() === 'HOME'}
                />
              <Menu.Item
                as={Link}
                to='/explore'
                className="menu-option"
                name="Explore"
                active={this.activeItem() === 'EXPLORE'}
              />
              <Menu.Item
                as={Link}
                to='/wanderlist'
                className="menu-option"
                name="Wanderlist"
                active={this.activeItem() === 'WANDERLIST'}
              />
            {
              this.state.currentUser ?
              <Menu.Item
                as={Link}
                to='/myaccount'
                className="menu-option"
                style={{marginRight: "22%", color: "white"}}
                name="Sign Out"
                active={false}
                onClick={() => this.logoutUser('Sign Out')}
              />
              :
              <Menu.Item
                as={Link}
                to='/myaccount'
                className="menu-option"
                name="Sign In"
                active={this.activeItem() === 'SIGN IN'}
              />
            }
          </Menu>
        </div>  
          <div className="travel-bug">
            TRAVEL BUG
          </div> 
          <div className="travel-title" style={{display: this.props.location.pathname !== "/" ? 'block' : 'none'}}>
            {this.activeItem()}
          </div> 
                <div className="background-home">
              <div>
                <Switch>
                  <Route exact path='/' render={props => <Homepage handleItemClick={this.handleItemClick} 
                        logoutUser = {this.logoutUser} currentUser={this.state.currentUser} 
                   />} />
                  <Route exact path='/explore' render={props => <HotelList 
                        addToWunderlist={this.addToWunderlist}
                        removeHotelFromWunderlist={this.removeHotelFromWunderlist}
                        hasHotelBeenAddedToWunderList={this.hasHotelBeenAddedToWunderList}
                        handleUser={this.handleUser}  {...props} />} />
                  <Route exact path='/wanderlist' render={props => <Wishlist
                      changeWishlistItem={this.changeWishlistItem}
                      changeWishlistItemNote ={this.changeWishlistItemNote}
                      hotelsInWunderlist={this.state.hotelsInWunderlist}
                      addToWunderlist={this.addToWunderlist}
                      removeHotelFromWunderlist={this.removeHotelFromWunderlist}
                      hasHotelBeenAddedToWunderList={this.removeHotelFromWunderlist}
                      handleUser={this.handleUser}  
                      {...props} />} />  
                  <Route exact path='/myaccount' render={props => <SignInPage 
                          handleUser={this.handleUser}  
                        {...props} />} />
                </Switch>
              </div>
            </div>
            </div>
          


      <div className="site-footer">
        © Sarah Jacob 2018
      </div>
    </div>
    )
  }
}

export default withRouter(TravelBug)
