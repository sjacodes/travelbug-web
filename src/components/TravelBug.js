import React, { Component } from 'react'
import { Route, Link, withRouter, Switch } from "react-router-dom";
import './TravelBug.css'
import Wishlist from './Wishlist/Wishlist';
import HotelList from './HotelList/HotelList';
import { Menu, Responsive, Icon } from 'semantic-ui-react'
import Homepage from './Homepage/Homepage';
import SignInPage from './SignInPage/SignInPage';
import API from '../adapters/API'




class TravelBug extends Component {
  state = {
    hotelsInWunderlist: [],
    currentUser: window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : undefined,
    noteContent: '',
    timer: undefined,
    menuOpen: false
  }


  updateWanderlist = () => {
    API.fetchWishlist(this.state.currentUser)
      .then(resp => resp.json())
      .then(data => this.setState({
        hotelsInWunderlist: data
      }))
  }

  addToWunderlist = (hotel) => {
    if (this.state.hotelsInWunderlist.map(wlh => wlh.hotel_id).includes(hotel.id)) return;
    if (this.state.currentUser !== undefined) {
      API.saveUsersWishlistedHotels(hotel, this.state.currentUser)
        .then(resp => resp.json())
        .then(data => this.setState({
          hotelsInWunderlist: data
        })
        )
    } else {
      this.setState({
        hotelsInWunderlist: [...this.state.hotelsInWunderlist, this.convertHotelToWishlistedHotel(hotel)]
      })
    }
  }

  convertHotelToWishlistedHotel = hotel => {
    return {
      hotel_id: hotel.id,
      imageurl: hotel.imageurl,
      note: '',
      city: hotel.city,
      name: hotel.name,
      website: hotel.website,
      checklist_items: [
        {
          checked: false,
          content: 'Late checkout available'
        },
        {
          checked: false,
          content: 'Airport transfer available on request'
        },
        {
          checked: false,
          content: 'Offers packages, deals and discounts'
        },
        {
          checked: false,
          content: 'Has availability for my prefered dates'
        },
        {
          checked: false,
          content: 'Is within my price range'
        }
      ]
    }
  }


  removeHotelFromWunderlist = (selectedHotel) => {
    this.setState({
      hotelsInWunderlist: this.state.hotelsInWunderlist.filter(hotel => selectedHotel !== hotel),
      activeItem: "Wanderlist"
    })
    API.removeUsersWishlistedHotels(selectedHotel, this.state.currentUser)
  }

  changeWishlistItem = (hotel_id, item, itemIndex) => {
    const wishlistedHotel = this.state.hotelsInWunderlist.find(hotel => hotel.hotel_id === hotel_id)
    const wishlistedHotels = this.state.hotelsInWunderlist
    const wlhIndex = wishlistedHotels.indexOf(wishlistedHotel)
    wishlistedHotel.checklist_items[itemIndex].checked = !wishlistedHotel.checklist_items[itemIndex].checked
    wishlistedHotels[wlhIndex] = wishlistedHotel
    this.setState({
      hotelsInWunderlist: wishlistedHotels
    })
    API.updateWishlistedHotel(wishlistedHotel)
  }

  changeWishlistItemNote = (hotelId, note) => {
    this.setState({
      hotelsInWunderlist: this.state.hotelsInWunderlist.map(hotel => {
        if (hotel.hotel_id !== hotelId) return hotel
        hotel.note = note
        return hotel
      })
    })
    if (this.state.timer !== undefined) {
      window.clearTimeout(this.state.timer)
    }
    this.setState({
      timer: window.setTimeout(() => {
        API.updateWishlistedHotel(
          this.state.hotelsInWunderlist.find(hotel => hotel.hotel_id === hotelId)
        )
      }, 1000)
    })
  }


  hasHotelBeenAddedToWunderList = hotel => {
    if (!Array.isArray(this.state.hotelsInWunderlist)) return false;
    return this.state.hotelsInWunderlist && this.state.hotelsInWunderlist.map(wlh => wlh.hotel_id).includes(hotel.id)

  }

  handleUser = (user, options = { signup: false }) => {
    if (user.error !== undefined) return;
    console.log(user)
    window.localStorage.setItem('user', JSON.stringify(user))
    this.setState(
      {
        currentUser: { email: user.email, id: user.id }
      },
      () => {
        if (options.signup) {
          API.saveUsersWishlistedHotels(
            this.state.hotelsInWunderlist,
            user
          )
            .then(res => res.json())
            .then(data => this.setState({
              hotelsInWunderlist: data
            }))
        } else {
          API.fetchWishlist(this.state.currentUser)
            .then(res => res.json())
            .then(data => this.setState({
              hotelsInWunderlist: data
            }))
        }
      }
    )
  }

  logoutUser = () => {
    this.setState({ currentUser: undefined, hotelsInWunderlist: [] })
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

  menuObjects = [
    {
      name: 'Home',
      displayName: 'HOME',
      linkTo: '/'
    },
    {
      name: 'Explore',
      displayName: 'EXPLORE',
      linkTo: '/explore'
    },
    {
      name: 'Wanderlist',
      displayName: 'WANDERLIST',
      linkTo: '/wanderlist'
    },
    {
      name: 'Sign In',
      displayName: 'SIGN IN',
      linkTo: '/myaccount'
    }
  ]

  toggleMenuOpen = () => this.setState({ menuOpen: !this.state.menuOpen })

  menuItems = () => {
    return (
      <>
      <Responsive as={Menu.Item}
          onClick={this.toggleMenuOpen}
          maxWidth={767}
        >
          <Icon name='bars' />
        </Responsive>
        {
          this.menuObjects.map(menuItemObj => {
            return (
              <Responsive as={Menu.Item}
              name={menuItemObj.name}
              active={this.activeItem() === menuItemObj.displayName}
              onClick={this.handleItemClick}
              minWidth={this.state.menuOpen ? 0 : 768}
            >
              <Link to={menuItemObj.linkTo}>{menuItemObj.displayName}</Link>
            </Responsive>
            )
          })
        }
      </>
    )
    // <Menu.Item
    //           as={Link}
    //           to='/'
    //           className="menu-option"
    //           name="Home"
    //           active={this.activeItem() === 'HOME'}
    //         />
    //         <Menu.Item
    //           as={Link}
    //           to='/explore'
    //           className="menu-option"
    //           name="Explore"
    //           active={this.activeItem() === 'EXPLORE'}
    //         />
    //         <Menu.Item
    //           as={Link}
    //           to='/wanderlist'
    //           className="menu-option"
    //           name="Wanderlist"
    //           active={this.activeItem() === 'WANDERLIST'}
    //         />
    //         {
    //           this.state.currentUser ?
    //             <Menu.Item
    //               as={Link}
    //               to='/myaccount'
    //               className="menu-option"
    //               style={{ marginRight: "22%", color: "white" }}
    //               name="Sign Out"
    //               active={false}
    //               onClick={() => this.logoutUser('Sign Out')}
    //             />
    //             :
    //             <Menu.Item
    //               as={Link}
    //               to='/myaccount'
    //               className="menu-option"
    //               name="Sign In"
    //               active={this.activeItem() === 'SIGN IN'}
    //             />
    //         }
  }


  render() {
    return (
      <>
        <div style={{ minHeight: 'calc(100vh - 75px)' }}>
          <Menu id="menu" stackable inverted secondary fixed="top" fluid widths={this.menuObjects.length}>
            {this.menuItems()}
          </Menu>
          <div className="travel-bug">
            TRAVEL BUG
          </div>
          <div className="travel-title" style={{ display: this.props.location.pathname !== "/" ? 'block' : 'none' }}>
            {this.activeItem()}
          </div>
          <div className="background-home">
            <Switch>
              <Route exact path='/' render={props => <Homepage handleItemClick={this.handleItemClick}
                logoutUser={this.logoutUser} currentUser={this.state.currentUser}
              />} />
              <Route exact path='/explore' render={props => <HotelList
                addToWunderlist={this.addToWunderlist}
                removeHotelFromWunderlist={this.removeHotelFromWunderlist}
                hasHotelBeenAddedToWunderList={this.hasHotelBeenAddedToWunderList}
                handleUser={this.handleUser}  {...props} />} />
              <Route exact path='/wanderlist' render={props => <Wishlist
                changeWishlistItem={this.changeWishlistItem}
                changeWishlistItemNote={this.changeWishlistItemNote}
                hotelsInWunderlist={this.state.hotelsInWunderlist}
                addToWunderlist={this.addToWunderlist}
                removeHotelFromWunderlist={this.removeHotelFromWunderlist}
                hasHotelBeenAddedToWunderList={this.removeHotelFromWunderlist}
                handleUser={this.handleUser}
                currentUser={this.state.currentUser}
                updateWanderlist={this.updateWanderlist}
                {...props} />} />
              <Route exact path='/myaccount' render={props => <SignInPage
                handleUser={this.handleUser}
                {...props} />} />
            </Switch>
          </div>
        </div>



        <div className="site-footer">
          © Sarah Jacob 2018
      </div>
      </>
    )
  }
}

export default withRouter(TravelBug)
