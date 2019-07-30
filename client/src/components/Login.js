import React, { Component } from 'react'
import { login } from './UserFunctions'

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
      code: this.state.code,
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
                Please Login
              </h1>
              <div className="form-grop">
                <label htmlFor="code">Code:</label>
                <input type="text"
                  className="form-control"
                  name="code"
                  placeholder="Enter Code"
                  value={this.state.code}
                  onChange={this.onChange} />
              </div>
              <div className="form-grop">
                <label htmlFor="password">Password:</label>
                <input type="none"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange} />
              </div>
              <br />

              <button type="submit" className="btn btn-lg btn-primary btn-block">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}