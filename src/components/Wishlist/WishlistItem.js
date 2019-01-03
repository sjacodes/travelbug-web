import React, { Component } from 'react'
import { Grid, Checkbox, Form, TextArea } from 'semantic-ui-react'
import './Wishlist.css'
import { animated } from 'react-spring'






class WishlistItem extends Component {

  updateImgUrl = url => {
    return process.env.REACT_APP_STAGE === 'dev' ? url : url.replace('http://localhost:3000', 'https://travel-bug-api.herokuapp.com')
  }
  

  render () {
    return (
        <animated.div style={{...this.props.styles}}>
          <a className="wishlist-hotel-image" href={"http://" + this.props.hotel.website} target="_blank" > 
            {this.props.hotel.name}, {this.props.hotel.city}
          </a>
            <Grid stackable key={this.props.hotel.id} className="blade" >
                  <Grid.Column   width={5}>
                    <div>
                      <img className="hotel-img" style={{maxWidth: "100%", paddingBottom: "10px"}} src={this.updateImgUrl(hotel.imageurl)} alt=""/>
                    </div>           
                  </Grid.Column>
                  <Grid.Column  width={3} >
                    <div className='wishlist-hotel-checklist'>
                    {
                      this.props.hotel.checklist_items.map((item, i) => {
                        return (
                          <div key={i} style={{maxWidth: "100%", paddingBottom: "18px"}}>
                            <Checkbox checked={item.checked} label={item.content} onChange={(event) => this.props.changeWishlistItem(this.props.hotel.hotel_id, item, i)}/>
                          </div>
                        )
                      })
                    }                                                                                                      
                    </div>
                  </Grid.Column>
                  <Grid.Column  width={5}> 
                    <div className='wishlist-hotel-note'>
                      <div style={{maxWidth: "100%"}}>
                        <Form >
                          <TextArea className="note" style={{ minHeight: 250}} placeholder='Sticky notes are so old-school. Instead, we want you to use this digital space to write down your questions & comments you might want to look into before you go ahead and book your holiday.' 
                          onChange={(event) => this.props.changeWishlistItemNote(this.props.hotel.hotel_id, event.target.value)} 
                          value={this.props.hotel.note} />
                        </Form>
                      </div>
                    </div>
                  </Grid.Column>
                  <Grid.Column  width={3}> 
                    <div>
                      <div style={{maxWidth: "100%"}}>
                        <button className='remove-from-wishlist-button' onClick={() => this.props.removeHotelFromWunderlist(this.props.hotel)}>
                          Not feeling this hotel anymore...let's remove it.
                        </button>
                      </div>
                    </div>
                  </Grid.Column>
            </Grid>
          </animated.div>
        )
  }
}

export default WishlistItem
