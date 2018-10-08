import React, { Component } from 'react'
import HotelCollection from './HotelCollection'
import './HotelList.css'


class HotelList extends Component {

  state = {
    hotels: []
  }

  getHotels = () => {
    fetch('http://localhost:3000/hotels')
    .then(resp => resp.json())
    .then(data => this.setState({
      hotels: data
    }))
  }

  componentDidMount = () => {
    this.getHotels()
  }



  render () {
    return (
    <div style={{display: this.props.display ? '' : 'none'}} className='hotel-list'>
      <div className='intro-to-hotels'>
        <div className='intro-header'>
        </div>
        <div className='intro-body'>
        </div>
        < HotelCollection hotels={this.state.hotels} 
          addToWunderlist={this.props.addToWunderlist}
          removeHotelFromWunderlist={this.props.removeHotelFromWunderlist}
          hasHotelBeenAddedToWunderList={this.props.removeHotelFromWunderlist}
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









