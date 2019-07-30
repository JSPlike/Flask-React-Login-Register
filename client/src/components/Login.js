import React, { Component } from 'react'
import { login } from './UserFunctions'

this.props.userHasAuthenticated(true);


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      name: this.state.code,
      password: this.state.password
    }

    login(user).then(res => {
      if (!res.error) {
        this.props.history.push(`/`)
      }
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">
                Please Sign In
              </h1>
              <div className="form-grop">
                <label htmlFor="name">Name</label>
                <input type="none"
                  className="form-control"
                  name="code"
                  placeholder="Enter Name"
                  value={this.props.name}
                  onChange={this.onChange} />
              </div>
              <div className="form-grop">
                <label htmlFor="password">Password</label>
                <input type="none"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.props.password}
                  onChange={this.onChange} />
              </div>
              <button type="submit" className="btn btn-lg btn-primary btn-block">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}