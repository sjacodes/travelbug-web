import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import './SignInPage.css'
import API from '../../adapters/API'



class SignUpForm extends Component {

    state = {
      email: '',
      password: '',
      errors: []
    }

    handleSubmit = () => {
      const { email, password } = this.state
      const { signin } = this.props

      API.signup(email. password)
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



  handleClickOnSignUp = () => {
    API.signup(this.state.email, this.state.password)
      .then(resp => {
        this.props.handleUser(resp, { signup: true})
      })
      .then(() => this.props.history.push('/explore'))
      .catch(resp => {
        resp.json()
          .then(data => {
            this.setState({
              errors: data.error
            })
          })
      })
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









