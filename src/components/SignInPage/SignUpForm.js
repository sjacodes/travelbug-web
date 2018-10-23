import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import './SignInPage.css'
import API from '../../adapters/API'
import { Link } from "react-router-dom";



class SignUpForm extends Component {

    state = {
      email: '',
      password: '',
      errors: []
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }



  handleClickOnSignUp = () => {
    API.signup(this.state.email, this.state.password)
      .then(resp => {
        this.props.handleUser(resp, { signup: true})
      })
      .catch(resp => {
        resp.json()
          .then(data => {
            this.setState({
              errors: data.error
            })
          })
      })
      .then(() => this.props.history.push('/explore'))
  }

  render () {
    return (
      <div className="sign-up-form">
        <div className="sign-up-header"> 
          Don't have an account with us. <b>Create one</b> now! 
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
        <Form className="sign-up-form">
          <Form.Field>
            <input name='email' value={this.state.email} placeholder='Email' onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <input name='password' value={this.state.password} type='password' placeholder='Password' onChange={this.handleChange} />
          </Form.Field>
          <button className="sign-in-button" onClick={() => this.handleClickOnSignUp()} type='submit'>Sign Up</button>
        </Form>
        <br/>
        <div className="or">
          OR...
        </div>
        <br/>
      </div>
    )
  }
}

export default SignUpForm









