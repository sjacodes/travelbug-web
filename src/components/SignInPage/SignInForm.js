import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import './SignInPage.css'
import API from '../../adapters/API'
import { Link } from "react-router-dom";





class SignInForm extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleClickOnSignIn = () => {
    API.signin(this.state.email, this.state.password)
      .then(resp => this.props.handleUser(resp))
  }





  render () {
    return (
        <div className="sign-in-form">
            <div className="sign-in-header"> 
              Sign in so you can begin your journey with us. 
            </div>
            <Form className="signin-form">
              <Form.Field>
              <input name='email' value={this.state.email} placeholder='Email' onChange={this.handleChange} />
              </Form.Field>
            <Form.Field>
              <input name='password' value={this.state.password} type='password' placeholder='Password' onChange={this.handleChange} />
            </Form.Field>
              <Link to='/explore'>
                <button className="sign-in-button" onClick={() => this.handleClickOnSignIn()} type='submit'>Sign In</button>
              </Link>
            </Form>
            <br/>
            <br/>
            <div className="or">
            OR...
          </div>
       </div>
         
    )
  }
}

export default SignInForm









