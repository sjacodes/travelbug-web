import React, { Component } from 'react'


class HotelCollection extends Component {


  render () {
  	return (
    <div className='hotel-collection'>
        {
         this.props.hotels.map(hotel =>
          <div>
            <img src={hotel.imageurl}/>
            <h3> {hotel.name}</h3>
            <p>{hotel.city} | {hotel.country} </p> 
            <button onClick={() => this.props.addToWunderlist(hotel)}>
              Add to Wunderlist
            </button>
          </div>
        )
        }
    </div>
  	)
  }
}
export default HotelCollection
