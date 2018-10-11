import React, { Component } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import './SignInPage.css'


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
      <div style={{display: this.props.display ? '' : 'none'}} className='sign-in-page'>
        <div className="forms">
          <SignInForm onSubmit={this.signIn} handleUser={this.props.handleUser} />
          <SignUpForm onSubmit={this.signUp} handleUser={this.props.handleUser}/>
        </div>
      </div>
    )
  }
}




export default SignInPage
