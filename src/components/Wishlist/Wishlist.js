import React, { Component } from 'react'
import { Grid, Checkbox, Form, TextArea } from 'semantic-ui-react'
import WishlistItem from './WishlistItem'
import './Wishlist.css'


class Wishlist extends Component {
  render () {
    return (
    
      <div style={{display: this.props.display ? '' : 'none'}} className='wishlist'>
      <div className="wish-list-instructions">
        Everyone deserves a space where they can curate their very own wanderlist. 
        <br/>
        This is yours.
      </div>
      <div className="wish-list-items">
        <WishlistItem hotelsInWunderlist={this.props.hotelsInWunderlist}/>
      </div>
      <div className="wrapper">
        <button className="back-to-hotel-list" onClick={() => this.props.handleItemClick('Explore')}> Let's get back to exploring </button>
      </div>

      </div>
        )
  }
}

export default Wishlist
