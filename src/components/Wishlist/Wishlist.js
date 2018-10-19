import React, { Component } from 'react'
import './Wishlist.css'
import WishlistItem from './WishlistItem'
import { Link } from "react-router-dom";



class Wishlist extends Component {

  componentDidMount = () => {
    if (this.props.hotelsInWunderlist.length === 0 && !!this.props.currentUser) {
      this.props.updateWanderlist()
    }
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
              <p > Don't want to lose that wanderlist of yours? </p>
            </div>
            <div className="wrapper">
              <Link to='/myaccount'>
                 <button className="back-to-hotel-list"> Sign up now </button>
              </Link>
            </div>
          </div>
        }


          { this.props.hotelsInWunderlist.map((hotel => 
            < WishlistItem key={hotel.id}
              hotel={hotel}
              changeWishlistItem={this.props.changeWishlistItem}
              changeWishlistItemNote={this.props.changeWishlistItemNote}
              hotelsInWunderlist={this.props.hotelsInWunderlist}
              addToWunderlist={this.props.addToWunderlist}
              removeHotelFromWunderlist={this.props.removeHotelFromWunderlist}
              hasHotelBeenAddedToWunderList={this.props.removeHotelFromWunderlist}
              />
          ))}

       

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
