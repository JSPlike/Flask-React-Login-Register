import React from 'react'
import { register } from './UserFunctions'

class Register extends React.Component {

  constructor(props) {
    super()
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

    const newUser = {
      code: this.state.code,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">

            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">
                Please Sign Up
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
                <input type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange} />
              </div>
              <br />
              <button type="submit" className="btn btn-lg btn-primary btn-block">
                DONE
              </button>
            </form>
          </div>
        </div>
      </div >
    )
  }
}

export default Register