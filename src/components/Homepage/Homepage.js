import React, { Component } from 'react'

class Homepage extends Component {
  render () {
    return (
        <div style={{display: this.props.display ? '' : 'none'}} className='homepage'>
        This is homepage
          <div className='content-1'>
            <div className="text-over-img">
            </div>
            <div className="explore-hotels-btn">
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
