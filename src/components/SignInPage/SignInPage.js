import React, { Component } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import './SignInPage.css'

class SignInPage extends Component {

  render() {
    return (
      <div className='sign-in-page'>
        <div className="sign-in-div-for-background-image">
          <div className='forms'>
            <SignUpForm handleUser={this.props.handleUser} history={this.props.history} />
            <SignInForm handleUser={this.props.handleUser} />
          </div>
        </div>
      </div>
    )
  }
}

export default SignInPage
