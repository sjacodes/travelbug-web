import React, { Component } from 'react'
import './HotelList.css'



class HotelCollection extends Component {


  render () {
  	return (
    <div className='hotel-collection'>
        {
         this.props.hotels.map(hotel =>
          <p>
            <img src={hotel.imageurl}/>
            <h3 className="hotel-list-image-heading"> {hotel.name}</h3>
            <p className="hotel-list-image-city-and-country">{hotel.city} | {hotel.country} </p> 
            <button className="hotel-list-add-to-wishlist-buttons" onClick={() => this.props.addToWunderlist(hotel)}>
              Add to Wanderlist
            </button>
          </p>

        )
        }
    </div>
  	)
  }
}
export default HotelCollection
