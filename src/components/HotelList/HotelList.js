import React, { Component } from 'react'

class HotelList extends Component {
  render () {
    return (
    <div style={{display: this.props.display ? '' : 'none'}} className='hotel-list'>
      This is hotel list
      <div className='intro-to-hotels'>
        <div className='intro-header'>
        </div>
        <div className='intro-body'>
        </div>
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









