import React, { Component } from 'react'
import './Wishlist.css'
import WishlistItem from './WishlistItem'
import { Link } from "react-router-dom";
import { Transition } from 'react-spring'




class Wishlist extends Component {

  componentDidMount = () => {
    if (this.props.hotelsInWunderlist.length === 0 && !!this.props.currentUser) {
      this.props.updateWanderlist()
    }
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error(error, info);
  }

  render () {
    return (
    
      <div className='wishlist'>
        <div className="wish-list-instructions">
          Everyone deserves a space where they can curate their very own wanderlist. 
          <br/>
          This is yours.
        </div>

        { !this.props.currentUser &&
          <div>
            <div className="dont-lose">
              <p > Don't want to lose your wanderlist? </p>
            </div>
            <div className="wrapper">
              <Link to='/myaccount'>
                 <button className="back-to-hotel-list"> Sign up now </button>
              </Link>
            </div>
          </div>
        }

        <div id='list'>
          <Transition
            keys={this.props.hotelsInWunderlist.map(hotel => hotel.hotel_id)}
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: 'auto' }}
            leave={{ opacity: 0, height: 0, pointerEvents: 'none', border: 'none' }}>

                { this.props.hotelsInWunderlist.map((hotel  => styles =>
                  < WishlistItem 
                    key={hotel.hotel_id}
                    hotel={hotel}
                    styles={styles}
                    changeWishlistItem={this.props.changeWishlistItem}
                    changeWishlistItemNote={this.props.changeWishlistItemNote}
                    hotelsInWunderlist={this.props.hotelsInWunderlist}
                    addToWunderlist={this.props.addToWunderlist}
                    removeHotelFromWunderlist={this.props.removeHotelFromWunderlist}
                    hasHotelBeenAddedToWunderList={this.props.hasHotelBeenAddedToWunderList}
                    />
                ))}
          </Transition>

        </div>

       

        <div className="wrapper">
          <Link to='/explore'>
            <button className="back-to-hotel-list" > 
              Let's get back to exploring 
            </button>
          </Link>
        </div>
        {/* <div className="wrapper">
            <button className="export-wanderlist-button" > 
              Export Wanderlist
            </button>
        </div> */}
      </div>
        )
  }
}

export default Wishlist
