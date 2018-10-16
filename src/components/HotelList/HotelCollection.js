import React, { Component } from 'react'
import './HotelList.css'
import API from '../../adapters/API'



class HotelCollection extends Component {


  render () {
  	return (
    <div className='hotel-collection'>
        {
         this.props.hotels.map(hotel =>
          <p key={hotel.id}>
            <img src={hotel.imageurl} alt=""/>
            <br/>
            <br/>
            <a className="hotel-list-image-heading" href={"http://" + hotel.website} >
              {hotel.name}
            </a>
            <p className="hotel-list-image-city-and-country">{hotel.city} | {hotel.country} </p> 
            {
              this.props.hasHotelBeenAddedToWunderList(hotel) ? 
              <button className="hotel-list-add-to-wishlist-buttons" style={{ color: "#f2e4df", opacity: "0.5"}} >
                Added to Wanderlist
              </button>
              :
              <button className="hotel-list-add-to-wishlist-buttons" onClick={() => this.props.addToWunderlist(hotel)}>
                Add to Wanderlist
              </button>
            }
          </p>
        )
        }
    </div>
  	)
  }
}
export default HotelCollection
