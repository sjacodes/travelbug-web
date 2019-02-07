import React, { Component } from 'react'
import './HotelList.css'





class HotelCollection extends Component {

  pulseButton = (event, hotel) => {
    event.target.classList.add('animated', 'rubberBand')
    this.props.addToWunderlist(hotel)
  }

  updateImgUrl = url => {
    return process.env.REACT_APP_STAGE === 'dev' ? url : url.replace('http://localhost:3000', 'https://travel-bug-api.herokuapp.com')
  }

  render () {
  	return (
    <div className='hotel-collection'>
        {
         this.props.hotels.map(hotel =>
          <div key={hotel.id}>
            <div class="hotel-image">
              <img className="img" src={this.updateImgUrl(hotel.imageurl)} alt=""/>
            </div>
            <br/>
            <br/>
            <div class="hotel-description">
              <div className='background-slope'></div>
              <div className="hotel-description-content">
                <a className="hotel-list-image-heading" href={"http://" + hotel.website} target="_blank">
                  {hotel.name}
                </a>
                <p className="hotel-list-image-city-and-country">
                  {hotel.city} | {hotel.country} 
                </p>
                {
                  this.props.hasHotelBeenAddedToWunderList(hotel)
                  ? 
                  <button className="hotel-list-add-to-wishlist-buttons" style={{ color: "#f2e4df", opacity: "0.5"}} >
                    Added to Wanderlist
                  </button>
                  :
                  <button className="hotel-list-add-to-wishlist-buttons" onClick={(event) => this.pulseButton(event, hotel)}>
                    Add to Wanderlist
                  </button>
                }
              </div>
            </div>
          </div>
        )
        }
    </div>
  	)
  }
}
export default HotelCollection
