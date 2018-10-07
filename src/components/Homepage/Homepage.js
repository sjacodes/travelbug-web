import React, { Component } from 'react'
import video from './travel.mp4';
import { Grid, Image, Segment } from 'semantic-ui-react'

class Homepage extends Component {
  render () {
    return (
        <div style={{display: this.props.display ? '' : 'none'}} className='homepage'>
        {/* <Grid stackable columns={2}>
          <Grid.Column>
              <video autoPlay loop muted className="myVideo" style={{ maxWidth: "100vw", display: "block", maxHeight: "400px", marginLeft: "auto", marginRight: "auto" }}>
                <source src={video} type="video/mp4"/>
              </video>
          </Grid.Column>
          <Grid.Column>
              <div>
                Map out your next adventure
              </div>
          </Grid.Column>
        </Grid> */}
          <div className='content-1'>
            <video autoPlay loop muted className="myVideo" 
            style={{ 
              maxWidth: "100vw", 
              display: "block",
              maxHeight: "400px",
              marginLeft: "auto",
              marginRight: "auto" 
            }}>
              <source src={video} type="video/mp4"/>
            </video>
            <div class="overlay">
              Map out your next adventure
          </div>
          </div>
          <div className='content-2'>
            <div className="testimonial-large">
              <div className="testimonial-img">
              </div>
              <div>
                <div className="testimonial-text">
                </div>
                <div className="testimonial-italic-text">
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          <div className='content-3'>
            <div className="box-1">
            </div>
            <div className="box-2">
            </div>
            <div className="box-3">
            </div>
          </div>
        </div>
        )
  }
}

export default Homepage
