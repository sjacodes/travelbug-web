import React, { Component } from 'react'

class Wishlist extends Component {
  render () {
    return (
      <div style={{display: this.props.display ? '' : 'none'}} className='wishlist'>
        This is wishlist
        <div className='blade'>
          <div>
            <div className='wishlist-hotel-image'>
            </div>
            <div className='wishlist-hotel-checklist'>
            </div>
            <div className='wishlist-hotel-note'>
            </div>
          </div>

        </div>
      </div>
        )
  }
}

export default Wishlist
