import axios from 'axios'

export const register = newUser => {
  return axios
    .post("http://127.0.0.1:5000/users/register", {
      code: newUser.code,
      password: newUser.password
    })
    .then(response => {
      console.log("Resgistered")
    })
}

export const login = user => {
  return axios
    .post("http://127.0.0.1:5000/users/login", {
      code: user.code,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data.token)
      return response.data.token
    })
    .catch(err => {
      console.log(err)
    })
}