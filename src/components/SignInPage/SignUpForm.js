import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import './SignInPage.css'
import API from '../../adapters/API'


class SignUpForm extends Component {

    state = {
      email: '',
      password: ''
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  render () {
    return (
      <div className="sign-up-form">
        <div className="sign-up-header"> 
          Don't have an account with us. Create one now! 
        </div>
        <Form className="sign-up-form">
          <Form.Field>
            <input name='email' value={this.state.email} placeholder='Email' onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <input name='password' value={this.state.password} type='password' placeholder='Password' onChange={this.handleChange} />
          </Form.Field>
          <button className="sign-in-button" onClick={() => API.signup(this.state.email, this.state.password).then(resp => this.props.handleUser(resp))} type='submit'>Sign Up</button>
        </Form>
        <br/>
        <br/>
      </div>
    )
  }
}

export default SignUpForm









