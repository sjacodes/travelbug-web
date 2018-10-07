import React, { Component } from 'react'
import video from './travel.mp4';
import image from '../../Assets/homepageImage.jpg';
import image2 from '../../Assets/BottomBladeImage1.jpg';
import image3 from '../../Assets/BottomBladeImage2.jpg';

import { Image, Grid } from 'semantic-ui-react'
import './Homepage.css'

class Homepage extends Component {
  render () {
    return (
        <div style={{display: this.props.display ? '' : 'none'}} className='homepage'>

          <div className='content-1'>
            <video autoPlay loop muted className="myVideo" 
            style={{ 
              maxWidth: "100vw", 
              display: "block",
              maxHeight: "450px",
              marginLeft: "auto",
              marginRight: "auto" 
            }}>
              <source src={video} type="video/mp4"/>
            </video>
          </div>
          <div className='content-2'>
            <div className="second-box">
              <Grid stackable columns={2}>
                <Grid.Column>
                    <Image className="homepage-hotel-img" src={image}/>
                </Grid.Column>
                <Grid.Column>
                    <div className="homepage-hotel-text">
                      <div className="travel-bug-invites">
                        You are invited ...
                      </div>
                      <div className="travel-bug-invites-body">
                        ... on a visual journey through the world's top 100 hotels. See something you like, add it to your wish list and always remember to think big!
                      </div>
                      <button className="explore-hotels-btn" onClick={() => this.props.handleItemClick('Explore')}> 
                        Start Exploring
                      </button>
                    </div>
                </Grid.Column>
              </Grid>
            </div>
          </div>
          <div className='content-3'>
          <div className="third-box">
              <Grid stackable columns={2}>
                <Grid.Column>
                    <Image className="homepage-hotel-img-third" src={image2}/>
                    <div className="bottom-images-text">
                      Never again will you be uninspired.
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <Image className="homepage-hotel-img-third" src={image3}/>
                    <div className="bottom-images-text">
                      Stay organised & make sure you get what you want.
                    </div>
                </Grid.Column>
              </Grid>
            </div>
          </div>
          
        </div>
        )
  }
}

export default Homepage
