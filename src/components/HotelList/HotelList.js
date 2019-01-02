import React, { Component } from 'react'
import HotelCollection from './HotelCollection'
import './HotelList.css'
import API from '../../adapters/API'


class HotelList extends Component {

  state = {
    hotels: []
  }

  getHotels = () => {
    API.getHotels()
    .then(data => this.setState({
      hotels: data
    }))
  }

  componentDidMount = () => {
    this.getHotels()
  }

  render () {
    return (
    <div className='hotel-list'>
      <div className='intro-to-hotels'>
          <div className='intro-header'>
            We've got that travel bug and we are here to spread it. 
          </div>
          <div className='intro-body'>
            Since all good holidays start with some inspiration, we've collated the world's best hotels to whet your appetite. <br/> Have a scroll, you know you want to.  And don't forget to add what you like to your wanderlist! 
          </div>
  
        < HotelCollection hotels={this.state.hotels} 
          addToWunderlist={this.props.addToWunderlist}
          removeHotelFromWunderlist={this.props.removeHotelFromWunderlist}
          hasHotelBeenAddedToWunderList={this.props.hasHotelBeenAddedToWunderList}
          handleUser={this.props.handleUser} 
        />
      </div>
      <div className='hotel'>
        <div className='hotel-image'>
        </div>
        <div className='hotel-info'>
          <div className='hotel-name'>
          </div>
          <div className='hotel-location'>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default HotelList









