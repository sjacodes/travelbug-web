import React, { Component } from 'react'
import { Grid, Checkbox, Form, TextArea } from 'semantic-ui-react'
import './Wishlist.css'




class WishlistItem extends Component {
  render () {
    return (
      <Grid key={this.props.hotel.id}className="blade">
            <Grid.Column   width={5}>
              <div className='wishlist-hotel-image'>
                <a className="wishlist-hotel-image" style={{paddingLeft: "40px"}} href={"http://" + this.props.hotel.website}> {this.props.hotel.name}, {this.props.hotel.city}</a>
                <img style={{maxWidth: "100%",  paddingTop: "20px", paddingLeft: "40px", paddingBottom: "50px"}} src={this.props.hotel.imageurl} alt=""/>
                
              </div>           
            </Grid.Column>
            <Grid.Column  width={3} >
              <div className='wishlist-hotel-checklist'>
              {
                this.props.hotel.checklist_items.map(item => {
                  return (
                    <div style={{maxWidth: "100%", paddingLeft: "50px", paddingBottom: "18px"}}>
                      <Checkbox label={item.content} />
                    </div>
                  )
                })
              }
              </div>
            </Grid.Column>
            <Grid.Column  width={5}> 
              <div className='wishlist-hotel-note'>
                <div style={{maxWidth: "100%"}}>
                  <Form style={{paddingLeft: "20px"}}>
                    <TextArea className="note" style={{ minHeight: 250}} placeholder='Sticky notes are so old-school. Instead, we want you to use this digital space to write down your questions & comments you might want to look into before you go ahead and book your holiday.' />
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
        )
  }
}

export default WishlistItem
