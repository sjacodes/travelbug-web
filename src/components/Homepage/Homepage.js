import React, { Component } from 'react'
import urls from '../../media_config';
import { Image, Grid } from 'semantic-ui-react'
import './Homepage.css'
import { Link } from "react-router-dom";

class Homepage extends Component {
  render () {
    const { video, image, image2, image3, image4 } = urls;
    return (
        <div className='homepage'>

          <div className='content-1'>
            <video autoPlay loop className="myVideo" 
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
            <div className='background-slope'></div>
            <div className="second-box">
              <Grid stackable columns={2}>
                <Grid.Column>
                    <Image className="homepage-hotel-img" src={image}/>
                </Grid.Column>
                <Grid.Column>
                  <div className="homepage-hotel-text-div-for-background-image" style={{backgroundImage: `url(${image4})`}}>
                    <div className="homepage-hotel-text">
                      <div className="travel-bug-invites">
                        You are invited ...
                      </div>
                      <div className="travel-bug-invites-body">
                        ... on a visual journey through the world's top 100 hotels. See something you like, add it to your wish list and always remember to think big!
                      </div>
                      <Link to='/myaccount'>
                        <button className="explore-hotels-btn" >
                          Create an account
                        </button>
                      </Link>
                    </div>
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
                      <div className="button-wrapper">
                      <Link to='/explore'>
                        <button className="set-up-your-account-button">
                            Start Exploring
                        </button>
                      </Link>
                      </div>
                  </Grid.Column>
                  <Grid.Column>
                      <Image className="homepage-hotel-img-third" src={image3}/>
                      <div className="bottom-images-text">
                        Stay organised & make sure you get what you want out of your holiday stay.
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
