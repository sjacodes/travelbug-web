import React, { Component } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import './SignInPage.css'
import LogOutForm from './LogOutForm'


class SignInPage extends Component {

  // signIn(email, password) {
  //   API.signIn(email,password)
  //     .then(userData => {
  //       this.props.setCurrentUser(userData)
  //     })
  // }

  // signUp () {

  // }

  render() {
    return (
      <div className='sign-in-page'>
        <div className='forms'>
          <SignInForm handleUser={this.props.handleUser} />
          <SignUpForm handleUser={this.props.handleUser} />
        </div>
      </div>
    )
  }
}




export default SignInPage
