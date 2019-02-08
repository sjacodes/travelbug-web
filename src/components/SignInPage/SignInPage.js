import React, { Component } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import urls from '../../media_config';
import './SignInPage.css'

class SignInPage extends Component {

  render() {
    const { image4 } = urls;
    return (
      <div className='sign-in-page'>
        <div className="sign-in-div-for-background-image" style={{backgroundImage: `url(${image4})`}}>
          <div className='forms'>
            <SignUpForm handleUser={this.props.handleUser} history={this.props.history} />
            <SignInForm handleUser={this.props.handleUser} history={this.props.history} />
          </div>
        </div>
      </div>
    )
  }
}

export default SignInPage
