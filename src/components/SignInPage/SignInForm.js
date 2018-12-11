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

  handleSubmit = () => {
    const { email, password } = this.state
    const { signin} = this.props
  
    API.signin(email, password)
    .then(data => {
      if (data.error) {
        console.log("API", data)
      } else {
        console.log("data", data)
        localStorage.setItem('token', data.token)
        signin(data)
      }
   })
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
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
              <b> Sign in </b> so you can continue your journey with us. 
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
       </div>
         
    )
  }
}

export default SignInForm









