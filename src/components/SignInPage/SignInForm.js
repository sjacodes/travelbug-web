import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import './SignInPage.css'
import API from '../../adapters/API'
import { Link } from "react-router-dom";

class SignInForm extends Component {

  state = {
    email: '',
    password: '',
    errors: []
  }

  handleSubmit = () => {
    const { email, password } = this.state
    const { handleUser, history } = this.props
  
    API.signin(email, password)
      .then(data => {
        handleUser(data, { signup: true })
        history.push('/explore')
      })
      .catch(errorData => {
        this.setState({
          errors: [...this.state.errors, errorData.error]
        })
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <div className="sign-in-form">
        <div className="sign-in-header">
          <b> Sign in </b> so you can continue your journey with us.
        </div>
        {
          this.state.errors.length > 0 && (
            <div className="sign-up-errors">
              {
                this.state.errors.map(e => <p>{e}</p>)
              }
          </div>
          )
        }
        <Form className="signin-form">
          <Form.Field>
          <input name='email' value={this.state.email} placeholder='Email' onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <input name='password' value={this.state.password} type='password' placeholder='Password' onChange={this.handleChange} />
          </Form.Field>
          <button className="sign-in-button" onClick={this.handleSubmit} type='submit'>Sign In</button>
        </Form>
        <br/>
        <br/>
      </div>
    )
  }
}

export default SignInForm









