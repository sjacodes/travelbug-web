import React, { Component } from 'react'
import { Grid, Checkbox, Form, TextArea } from 'semantic-ui-react'


class Wishlist extends Component {
  render () {
    return (
      <div style={{display: this.props.display ? '' : 'none'}} className='wishlist'>
        This is wishlist
        { this.props.hotelsInWunderlist.map((hotel => 
          <Grid className="blade" columns={3}>
            <Grid.Column>
              <div className='wishlist-hotel-image'>
                <img style={{maxWidth: "100%"}} src={hotel.imageurl}/>
              </div>           
            </Grid.Column>
            <Grid.Column>
              <div className='wishlist-hotel-checklist'>
              <div style={{maxWidth: "100%", textAlign: "center", paddingBottom: "10px"}}>
                <Checkbox label='Something hotel' />
              </div>
              <div style={{maxWidth: "100%", textAlign: "center", paddingBottom: "10px"}}>
                <Checkbox label='Something hotel' />
              </div>
              <div style={{maxWidth: "100%", textAlign: "center", paddingBottom: "10px"}}>
                <Checkbox label='Something hotel' />
              </div>
              <div style={{maxWidth: "100%", textAlign: "center", paddingBottom: "10px"}}>
                <Checkbox label='Something hotel' />
              </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className='wishlist-hotel-note'>
                <div style={{maxWidth: "100%"}}>
                  <Form>
                    <TextArea placeholder='Tell us more' />
                  </Form>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        ))}
      </div>
        )
  }
}

export default Wishlist
